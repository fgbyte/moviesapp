const fetch = require('node-fetch');

async function redeploy() {
  await fetch('https://api.vercel.com/v1/integrations/deploy/prj_HAllRRZAkZXUDneeXRizJbWZRps7/XmbYhilFPW?buildCache=false')
    .then(() => {
      console.log('Redeploy iniciado');
    })
    .catch((error) => {
      console.error('Error al iniciar el redeploy:', error);
    });
}

// setInterval(redeploy, 24 * 60 * 60 * 1000); // redeploy cada 24 horas

setInterval(redeploy, 5 * 60 * 1000); // redeploy en 5 minutes

// Llamamos a la función redeploy para que se ejecute inmediatamente
redeploy();
