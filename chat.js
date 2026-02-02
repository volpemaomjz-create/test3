// api/chat.js
// Vercel Serverless Function for DashScope API

export default async function handler(req, res) {
  // 只允许POST请求
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // 从环境变量获取配置
  const DASHSCOPE_API_KEY = process.env.DASHSCOPE_API_KEY;
  const DASHSCOPE_APP_ID = process.env.DASHSCOPE_APP_ID;

  // 检查环境变量
  if (!DASHSCOPE_API_KEY || !DASHSCOPE_APP_ID) {
    console.error('Missing environment variables');
    return res.status(500).json({ 
      error: 'Server configuration error',
      message: 'API配置错误，请联系管理员'
    });
  }

  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({ error: 'Prompt is required' });
    }

    // 调用DashScope API
    const response = await fetch(
      `https://dashscope.aliyuncs.com/api/v1/apps/${DASHSCOPE_APP_ID}/completion`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${DASHSCOPE_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          input: {
            prompt: prompt
          },
          parameters: {},
          debug: {}
        })
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error('DashScope API error:', response.status, errorText);
      throw new Error(`DashScope API error: ${response.status}`);
    }

    const data = await response.json();

    // 返回结果给前端
    return res.status(200).json(data);

  } catch (error) {
    console.error('Error calling DashScope:', error);
    return res.status(500).json({ 
      error: 'Internal server error',
      message: error.message 
    });
  }
}
