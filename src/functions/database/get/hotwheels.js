const axios = require("axios").default;

export async function getHotwheels() {
    try {
        let res = await axios.get(`https://${process.env.REACT_APP_API_LINK}/api/hotwheels`);
        return res;
    } catch (e) {
        console.log(e);
    }
}

