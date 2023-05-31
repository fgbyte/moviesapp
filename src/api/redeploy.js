//FIXME
//Esto no funciona

const fetch = require('node-fetch');

/**
* Redeploys the project on Vercel.
* @returns {Promise<void>}
*/
async function redeploy() {
  const endpoint = 'https://api.vercel.com/v1/integrations/deploy/prj_HAllRRZAkZXUDneeXRizJbWZRps7/XmbYhilFPW?buildCache=false';
  try {
    await fetch(endpoint);
    console.log('Redeploy initiated');
  } catch (error) {
    console.error('Error initiating redeploy:', error);
  }
}


// setInterval(redeploy, 24 * 60 * 60 * 1000); // redeploy cada 24 horas

// setInterval(redeploy, 5 * 60 * 1000); // redeploy en 5 minutes

// Llamamos a la función redeploy para que se ejecute inmediatamente
redeploy();//no funciona esto en vercel
