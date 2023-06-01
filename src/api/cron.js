const endpoint =
    "https://api.vercel.com/v1/integrations/deploy/prj_HAllRRZAkZXUDneeXRizJbWZRps7/XmbYhilFPW?buildCache=false";

async function fetchData(endpoint) {
    try {
        const response = await fetch(endpoint);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

fetchData(endpoint);
