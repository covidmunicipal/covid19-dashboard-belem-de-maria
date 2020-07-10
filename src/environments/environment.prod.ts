import { version } from '../../package.json';

export const environment = {
    buildVersion: version,
    production: true,
    firebase: {
      apiKey: "AIzaSyARoVxzzbVchKIYNCQXOqryQ8ncRQpTLVE",
      authDomain: "radar-covid-belem-de-maria.firebaseapp.com",
      databaseURL: "https://radar-covid-belem-de-maria.firebaseio.com",
      projectId: "radar-covid-belem-de-maria",
      storageBucket: "radar-covid-belem-de-maria.appspot.com",
      messagingSenderId: "786204113804",
      appId: "1:786204113804:web:29c5addf463cb3e08d74a9",
      measurementId: "G-XW7TRKZ84D"
    },
    spreadsheetId: '1YgPehc_9oGk3ng2TtkiyMj6dwj3YuLe2zrTT_flzNpo',
    appName: 'Radar Coronavírus Belém de Maria',
    targetLocation: 'Belém de Maria'
  };
