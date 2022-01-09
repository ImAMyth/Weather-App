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
            })
        })
    }