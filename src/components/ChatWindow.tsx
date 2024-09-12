import { FC} from 'react';
import { useTranslation } from 'react-i18next';
import { FaCircle } from 'react-icons/fa';
import dynamic from 'next/dynamic';
//import AnimationComponent from '../components/AnimationComponent';
interface ChatWindowProps {
  messages: { text: string; id: number; sending: boolean; sentByUser: boolean }[];
  setMessages: React.Dispatch<React.SetStateAction<{ text: string; id: number; sending: boolean; sentByUser: boolean }[]>>;
}

// Carregar o componente de forma dinâmica
const DynamicAnimationComponent = dynamic(() => import('../components/AnimationComponent'), {
  ssr: false,  // Desabilita SSR, útil se o componente depender de APIs do browser
});

const ChatWindow: FC<ChatWindowProps> = ({ messages }) => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col h-[80vh] overflow-y-auto bg-gray-100 dark:bg-gray-800">
      {/* Navbar */}
      <div className="flex items-center p-4 border-b border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900">
        <img
          src="/images/openai.svg" // Substitua com a URL da imagem do bot
          alt={t('botAltText')} // Usando tradução para o texto alternativo
          className="w-10 h-10 rounded-full mr-3 bg-white"
          loading="lazy" // Lazy loading aplicado
        />
        <div className="flex flex-col">
          <span className="font-semibold text-gray-900 dark:text-white">{t('botName')}</span>
          <span className="text-sm text-green-500 flex items-center">
            <FaCircle className="text-green-500 text-xs mr-1" />
            {t('botStatus')}
          </span>
        </div>
      </div>

      {/* Messages */}
      <div className="h-[80vh] overflow-y-auto p-4 bg-gray-100 dark:bg-gray-800">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.sentByUser ? 'justify-end' : 'justify-start'} mb-2`}
          >
            <div
              className={`p-2 shadow-md rounded-md ${msg.sentByUser ? 'bg-blue-200 text-black dark:bg-blue-500 dark:text-white' : 'bg-gray-200 text-black dark:bg-gray-600 dark:text-white'} max-w-[80%]`}
            >
              {msg.sending ? (
                <div className="w-8 h-8 mx-auto">
                  <DynamicAnimationComponent /> {/* Carregado dinamicamente */}
                </div>
              ) : (
                t(msg.text) // Traduzindo o texto da mensagem
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatWindow;