import React, { Component } from 'react'
import { Bar } from 'react-chartjs-2'
import { monthNames } from '../../utils/constants'

export default function Graph(props) {
    return (
      <div>
        <h2>Temperature graph</h2>
        <Bar
          data={{
            labels: [monthNames[props.date[0].getMonth()] + ' ' + props.date[0].getDate().toString() + 'th',
            monthNames[props.date[1].getMonth()] + ' ' + props.date[1].getDate().toString() + 'th',
            monthNames[props.date[2].getMonth()] + ' ' + props.date[2].getDate().toString() + 'th',
            monthNames[props.date[3].getMonth()] + ' ' + props.date[3].getDate().toString() + 'th',
            monthNames[props.date[4].getMonth()] + ' ' + props.date[4].getDate().toString() + 'th'],
            datasets: [
              {
                label: 'Temp',
                backgroundColor: 'rgba(0,123,255,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                hoverBorderColor: 'rgba(255,99,132,1)',
                data: [props.forecast[0], props.forecast[1], props.forecast[2], props.forecast[3], props.forecast[4]]
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
