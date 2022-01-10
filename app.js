function todaysWeather() {

    let loc = document.querySelector(".city")
    const key = "f5b874ead2e852b9f80e16c4db1c0b3b"

    fetch(`https://api.techniknews.net/ipgeo/`)
        .then((res) => res.json())
        .then((data) => {
            let town = data.city
            let state = data.regionName
            let zip = data.zip

            fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${key}`)
                .then(res => res.json())
                .then((data) => {
                    let temperature = data.main.temp
                    let weather = data.weather[0].main
                    let highTempValue = data.main.temp_max
                    let lowTempValue = data.main.temp_min
                    let feelsLikeValue = data.main.feels_like
                    let humidityValue = data.main.humidity
                    let windSpeedValue = data.wind.speed
                    let weatherImage = document.querySelector(".weatherImage")
                    let highTemp = document.querySelector("#highTemp")
                    let lowTemp = document.querySelector("#lowTemp")
                    let feelsLike = document.querySelector("#feelsLike")
                    let humidity = document.querySelector("#humidity")
                    let windSpeed = document.querySelector("#windSpeed")
                    weatherImage.src = `images/${weather}.svg`

                    switch (weather) {
                        case "Clouds":
                            weather = "Cloudy"
                            break;

                        case "Clear":
                            weather = "Sunny"
                            break;

                        case "Rain":
                            weather = "Raining"
                            break;

                        case "Drizzle":
                            weather = "Drizzling"
                            break;

                        case "Snow":
                            weather = "Snowing"
                            break;

                        case "Thunderstorms":
                            weather = "Thunder and Lightning storms"

                        default:
                            break;
                    }
                    loc.innerHTML = `Today's current weather in ${town}, ${state} is ${Math.round((temperature - 273.15) * 9 / 5 + 32)} F and ${weather} outside`
                    highTemp.innerHTML = `The high temperature for the day is ${Math.round((highTempValue - 273.15) * 9 / 5 + 32)}F`
                    lowTemp.innerHTML = `The low temperature for the day is ${Math.round((lowTempValue - 273.15) * 9 / 5 + 32)} F`
                    feelsLike.innerHTML = `Currently feels like ${Math.round((feelsLikeValue - 273.15) * 9 / 5 + 32)} F`
                    humidity.innerHTML = `Current humidity is ${humidityValue}%`
                    windSpeed.innerHTML = `Current wind speed is ${Math.round(windSpeedValue * 2.236936)} mph`
                })

                .catch((error) => {
                    console.log(error)
                })
        })
}
todaysWeather()