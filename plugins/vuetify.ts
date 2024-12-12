import '@mdi/font/css/materialdesignicons.css';

import 'vuetify/styles';
import { createVuetify } from 'vuetify';

export default defineNuxtPlugin(app => {
  const vuetify = createVuetify({
    theme: {
      defaultTheme: 'customLight',
      themes: {
        customLight: {
          dark: false,
          colors: {
            primary: '#000',
            surface: '#f7f8f9',
            background: '#fff',
            highlight: '#579DFF',
          },
        },
        customDark: {
          dark: true,
          colors: {
            primary: '#9FADBC',
            surface: '#282E33',
            background: '#1D2125',
            highlight: '#579DFF',
          },
        },
      },
    },
  });
  app.vueApp.use(vuetify);
});
