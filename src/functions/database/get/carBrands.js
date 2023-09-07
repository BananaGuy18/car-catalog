const axios = require("axios").default;

export async function getCarBrands() {
    try {
        let res = await axios.get(`https://${process.env.REACT_APP_API_LINK}/api/carBrands`);
        return(res.data);
    } catch (e) {
        console.log(e);
    }
}

