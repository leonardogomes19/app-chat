import { useTranslation } from 'next-i18next';

const Header = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang).catch((err) => console.error('Erro ao mudar idioma:', err));
  };

  return (
    <header className="bg-blue-500 text-white p-4 flex justify-between items-center">
      <h1>{t('appTitle')}</h1>
      <div className="flex space-x-4">
        <button
          onClick={() => changeLanguage('en')}
          className="flex items-center bg-white text-black px-3 py-1 rounded shadow"
        >
          <img src="/images/Flag_of_the_United_States.svg" alt="USA Flag" className="w-5 h-5 mr-2" />
          EN
        </button>
        <button
          onClick={() => changeLanguage('pt-BR')}
          className="flex items-center bg-white text-black px-3 py-1 rounded shadow"
        >
          <img src="/images/Flag_of_Brazil.svg" alt="Brazil Flag" className="w-5 h-5 mr-2" />
          PT-BR
        </button>
      </div>
    </header>
  );
};

export default Header;