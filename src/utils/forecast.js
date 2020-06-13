const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/abf64c0c8b84bb153cb936526676cbd6/'+ latitude + ',' + longitude
    request({ url, json: true }, (error, {body}) => {

        if (error) {
            callback('Unable to connect to wether service!', undefined)
        } else if (body.error) {
            callback('Unable to find location.', undefined)
        } else {
            const forecastSentence = body.daily.data[0].summary + 'It is currently ' + ((body.currently.temperature-32)/1.8).toFixed(2) + ' degrees out. There is a ' + body.currently.precipProbability + '% chance of rain.\n The wind speed is ' + body.currently.windSpeed
            callback(undefined, forecastSentence)
        }
    })
}

module.exports = forecast