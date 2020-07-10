import { version } from '../../package.json';

export const environment = {
    buildVersion: version,
    production: true,
    firebase: {
      apiKey: "AIzaSyBsuUsm7wT93b4RvJbBaM4jCGBlWiHz_Nw",
      authDomain: "radar-covid-bonfinopolis.firebaseapp.com",
      databaseURL: "https://radar-covid-bonfinopolis.firebaseio.com",
      projectId: "radar-covid-bonfinopolis",
      storageBucket: "radar-covid-bonfinopolis.appspot.com",
      messagingSenderId: "974807591803",
      appId: "1:974807591803:web:f2e33df61538556d94ebde",
      measurementId: "G-G6Y6XXZ9W1"
    },
    spreadsheetId: '1fveoSvn9oN5kJ-HxGUNffkxQ0F9Z5STlh7p3VNiVuOY',
    appName: 'Radar Coronavírus Bonfinópolis de Minas',
    targetLocation: 'Bonfinópolis de Minas'
  };
