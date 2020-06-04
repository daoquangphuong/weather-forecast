export const locationsResp = {
    data: [{
        title: "San Francisco",
        location_type: "City",
        woeid: 2487956,
        latt_long: "37.777119, -122.41964"
    }]
}

export const locations = [{
    id: 2487956,
    title: 'San Francisco'
}];

export const weatherDaysResp = {
    data: {
        "consolidated_weather": [{
            "id": 6600884265943040,
            "weather_state_name": "Clear",
            "weather_state_abbr": "c",
            "wind_direction_compass": "W",
            "created": "2020-06-04T15:16:16.401037Z",
            "applicable_date": "2020-06-04",
            "min_temp": 13.465,
            "max_temp": 20.805,
            "the_temp": 22.46,
            "wind_speed": 5.740782293377343,
            "wind_direction": 263.9595670412567,
            "air_pressure": 1008.0,
            "humidity": 56,
            "visibility": 15.857082140300644,
            "predictability": 68
        }]
    }
}

export const weatherDays = [{
    id: 6600884265943040,
    day: 'Thursday',
    maxTemp: '21',
    minTemp: '13'
}];