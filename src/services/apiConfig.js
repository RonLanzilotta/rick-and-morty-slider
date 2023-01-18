import axios from 'axios'

//declaring variables for API call endpoints.

let apiUrl;

const apiUrls = {
    production: "https://project2-production-7023.up.railway.app/",
    development: "https://project2-production-7023.up.railway.app/",
};

//looks to the window object and points to the local host. "if I"m running locally, then......"
if (window.location.hostname === "localhost") {
    apiUrl = apiUrls.development;
} else {
    apiUrl = apiUrls.production;
}

//declares a variable called api that will point to whichever endpoint is in use.
const api = axios.create({
    baseURL: apiUrl,
})

export default api;