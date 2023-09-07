const axios = require("axios").default;

export async function getAllCars() {
    try {
        let res = await axios.get(`https://${process.env.REACT_APP_API_LINK}/api/cars`);
        return res;
    } catch (e) {
        console.log(e);
    }
    
}