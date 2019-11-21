import React, { Component } from 'react'
import {Bar} from 'react-chartjs-2'

const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
]

export default class Graph extends Component {
    // constructor(props){
    //     super(props);
    //     this.state={
    //          data : {
    //             labels: [monthNames[this.props.date[0].getMonth()] + ' ' + this.props.date[0].getDate().toString() + 'th',
    //             monthNames[this.props.date[1].getMonth()] + ' ' + this.props.date[1].getDate().toString() + 'th',
    //             monthNames[this.props.date[2].getMonth()] + ' ' + this.props.date[2].getDate().toString() + 'th',
    //             monthNames[this.props.date[3].getMonth()] + ' ' + this.props.date[3].getDate().toString() + 'th',
    //             monthNames[this.props.date[4].getMonth()] + ' ' + this.props.date[4].getDate().toString() + 'th'],
    //             datasets: [
    //               {
    //                 label: 'Temp',
    //                 backgroundColor: 'rgba(0,123,255,0.2)',
    //                 borderColor: 'rgba(255,99,132,1)',
    //                 borderWidth: 1,
    //                 hoverBackgroundColor: 'rgba(255,99,132,0.4)',
    //                 hoverBorderColor: 'rgba(255,99,132,1)',
    //                 data: [this.props.forecast[0],this.props.forecast[1],this.props.forecast[2],this.props.forecast[3],this.props.forecast[4]]
    //               }
    //             ]
    //           }
    //     }
    // }
    render() {
        return (
            <div>
                 <h2>Temperature graph</h2>
        <Bar
          data={{labels: [monthNames[this.props.date[0].getMonth()] + ' ' + this.props.date[0].getDate().toString() + 'th',
          monthNames[this.props.date[1].getMonth()] + ' ' + this.props.date[1].getDate().toString() + 'th',
          monthNames[this.props.date[2].getMonth()] + ' ' + this.props.date[2].getDate().toString() + 'th',
          monthNames[this.props.date[3].getMonth()] + ' ' + this.props.date[3].getDate().toString() + 'th',
          monthNames[this.props.date[4].getMonth()] + ' ' + this.props.date[4].getDate().toString() + 'th'],
          datasets: [
            {
              label: 'Temp',
              backgroundColor: 'rgba(0,123,255,0.2)',
              borderColor: 'rgba(255,99,132,1)',
              borderWidth: 1,
              hoverBackgroundColor: 'rgba(255,99,132,0.4)',
              hoverBorderColor: 'rgba(255,99,132,1)',
              data: [this.props.forecast[0],this.props.forecast[1],this.props.forecast[2],this.props.forecast[3],this.props.forecast[4]]
            }
          ]}}
          width={100}
          height={100}
          options={{
            maintainAspectRatio: false
          }}
        />
            </div>
        )
    }
}
