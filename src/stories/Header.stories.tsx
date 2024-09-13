import React from 'react';
import Header from '../components/Header';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../public/locales/i18n'; // Certifique-se de apontar para sua configuração i18n

export default {
  title: 'Header',
  component: Header,
};

export const Default = () => (
  <I18nextProvider i18n={i18n}>
    <Header />
  </I18nextProvider>
);