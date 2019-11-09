import React, { Component } from 'react'


const API_KEY = 'd674110527020c6fa3a7d540ff7bf7b0'

export default class Api extends Component {

    constructor(props) {
        super(props);
        this.state = { weather: "" };
    }

    componentDidMount() {
        let getWeather = async () => {
            const api_call = await fetch(`http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=${API_KEY}`)
            const data = await api_call.json()
            console.log(data)
            this.setState({ weather: data })
        }
        getWeather()
    }

    render() {
        return (
            <div>
                dsdsds
            </div>
        )
    }
}
