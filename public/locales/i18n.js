import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Arquivos de tradução
import en from './en/common.json';
import ptBR from './pt-BR/common.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en }, // Traduções em inglês
      'pt-BR': { translation: ptBR }, // Traduções em português do Brasil
    },
    lng: 'pt-BR', // Idioma padrão
    fallbackLng: 'pt-BR', // Idioma de fallback caso o idioma selecionado não esteja disponível
    interpolation: {
      escapeValue: false, // O React já faz a escapagem dos valores
    },
    debug: true, // Habilita o modo de depuração para ver logs detalhados
  });

export default i18n;