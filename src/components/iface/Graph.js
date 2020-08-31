import React, { Component } from 'react'
import { Bar } from 'react-chartjs-2'
import { monthNames } from '../../utils/constants'

export default function Graph(props) {

  const getLabels = () => {
    let labels = []
    for (let i = 0; i <= 4; i++) {
      labels.push(monthNames[props.date[i].getMonth()] + ' ' + props.date[i].getDate().toString() + 'th')
    }
    return labels;
  }

  const getForecast = () => {
      let forecast = []
      for (let i = 0; i <= 4; i++) {
        forecast.push(props.forecast[i])
      }
      return forecast
  }

    return (
      <div>
        <h2>Temperature graph</h2>
        <Bar
          data={{
            labels: getLabels(),
            datasets: [
              {
                label: 'Temp',
                backgroundColor: 'rgba(0,123,255,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                hoverBorderColor: 'rgba(255,99,132,1)',
                data: getForecast()
              }
            ]
          }}
          width={100}
          height={100}
          options={{
            maintainAspectRatio: false
          }}
        />
      </div>
    )
}
