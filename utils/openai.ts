console.log('OPENAI_API_KEY:', process.env.OPENAI_API_KEY); // Verifique se a chave está sendo exibida

import { OpenAI } from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default openai;