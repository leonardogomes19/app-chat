import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
//import openai from '../../../utils/openai';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { message } = req.body;

  try {
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-4o-mini', // Atualize o modelo
        messages: [
          { role: 'system', content: 'You are a helpful assistant.' },
          { role: 'user', content: message }
        ],
        //max_tokens: 150,
      },
      {
        headers: {
          'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    // Verifique a estrutura da resposta e ajuste conforme necessário
    if (response.data && response.data.choices && response.data.choices.length > 0) {
      const responseText = response.data.choices[0].message.content.trim();
      res.status(200).json({ text: responseText });
    } else {
      res.status(500).json({ error: 'Resposta inesperada da API do OpenAI' });
    }
  } catch (error: any) {
    console.error('Erro ao chamar a API do OpenAI:', error?.response?.data || error.message || error);
    res.status(500).json({ error: error?.response?.data.error.message || error.message || error });
  }
}