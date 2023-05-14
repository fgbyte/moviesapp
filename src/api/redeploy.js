const fetch = require('node-fetch');

setInterval(() => {
  fetch('https://api.vercel.com/v1/integrations/deploy/prj_HAllRRZAkZXUDneeXRizJbWZRps7/XmbYhilFPW?buildCache=false').then(() => {
    console.log('Redeploy iniciado');
  });
}, 24 * 60 * 60 * 1000); // redeploy cada 24 horas
