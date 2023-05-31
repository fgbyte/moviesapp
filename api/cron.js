export default function handler(req, res) {
    const endpoint =
        "https://api.vercel.com/v1/integrations/deploy/prj_HAllRRZAkZXUDneeXRizJbWZRps7/XmbYhilFPW?buildCache=false";
    try {
        fetch(endpoint);
        console.log("Redeploy initiated");
        res.status(200).end("Redeploy initiated");
    } catch (error) {
        console.error("Error initiating redeploy:", error);
        res.status(500).end("Error initiating redeploy");
    }
}

