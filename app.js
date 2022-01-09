function todaysWeather() {

    let loc = document.querySelector(".city")

    fetch(`https://api.techniknews.net/ipgeo/`)
        .then((res) => res.json())
        .then((data) => {
            let town = data.city
            let state = data.regionName
            let zip = data.zip
        }
        )}
