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
                    let weatherImage = document.querySelector(".weatherImage")
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
                    loc.innerHTML = `Today's current weather in ${town}, ${state} is ${Math.round((temperature - 273.15) * 9 / 5 + 32)} degrees Fahrenheit and ${weather} outside`
                })

                .catch((error) => {
                    console.log(error)
                })
        })
}
todaysWeather()