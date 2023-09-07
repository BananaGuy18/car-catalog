const axios = require("axios").default;

export function getHotwheel(brand) {
    axios.get(`https://${process.env.REACT_APP_API_LINK}/api/${brand}`).then(function (response) {
        return(response);
    }).catch(function (error) {
        console.log(error);
    }).then(function () {
        // always executed
    });
}

