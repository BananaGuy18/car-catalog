const axios = require("axios").default;

export async function getTomicas() {
    try {
        let res = await axios.get(`https://${process.env.REACT_APP_API_LINK}/api/tomicas`);
        return res;
    } catch (e) {
        console.log(e);
    }
}

