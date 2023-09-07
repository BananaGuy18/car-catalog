const axios = require("axios").default;

export async function getCar(model, year) {

    let convert = model.replace(/ /g,"%20");
    
    try {
        let res = await axios.get(`https://${process.env.REACT_APP_API_LINK}/api/carSpecs?model=${convert}&year=${year}`);
        return res.data[0];
    } catch (e) {
        console.log(e);
    }
    
}