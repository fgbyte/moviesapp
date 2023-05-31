export default async function redeploy() {
    const endpoint = 'https://api.vercel.com/v1/integrations/deploy/prj_HAllRRZAkZXUDneeXRizJbWZRps7/XmbYhilFPW?buildCache=false';
    try {
      await fetch(endpoint);
      console.log('Redeploy initiated');
    } catch (error) {
      console.error('Error initiating redeploy:', error);
    }
  }