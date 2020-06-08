const request = require('request')

const forecast = (latitude, longitude, callback) => {
    // const url = 'https://api.darksky.net/forecast/9d1465c6f3bb7a6c71944bdd8548d026/' + latitude + ',' + longitude
    const url = 'http://api.openweathermap.org/data/2.5/weather?lat='+latitude+'&lon='+longitude+'&appid=30b082571641f68138cded0d4fbf9f3d'

    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.message) {
            callback(body.message, undefined)
        } else {
            callback(undefined, body.weather[0].main +' & '+ body.weather[0].description + '. It is currently ' + body.main.temp + ' Kelvins. Humidity is ' + body.main.humidity)
        }
    })
}

module.exports = forecast