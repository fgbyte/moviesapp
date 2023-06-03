import axios from "axios"
const apiKey = process.env.DEPLOY_HOOK;


const api = axios.create({
    baseURL: apiKey,
    headers: {
        'Content-Type': 'application/json;charset=utf-8',
    },
})

async function fetchData() {
    try {
        const response = await api();
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

fetchData();