const axios = require("axios").default;

export async function getLegos() {
    try {
        let res = await axios.get(`https://${process.env.REACT_APP_API_LINK}/api/legos`);
        return res;
    } catch (e) {
        console.log(e);
    }
}

