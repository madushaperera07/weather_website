require('dotenv').config()
const axios = require("axios")

const Geo = (location) =>{
    return new Promise((resolve , reject)=>{
        axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=5&appid=${process.env.API_KEY}`).then((res)=>{
            resolve({lat : res.data[0].lat,
                    lon :  res.data[0].lon,
                    country : res.data[0].country,
                    city : res.data[0].name            
            })
        }).catch((err)=>{
            reject({error : "Unable to find location"})
        })
    })
}


module.exports = Geo

/* Geo("rajagiriya").then((data)=>{
    console.log(data.lat)
    console.log(data.lon)
    console.log(data.country)
    console.log(data.city)
}).catch((err)=>{
    console.log(err.error)
}) */