import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import './Cards.css'

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
]

export default class MapsForm extends Component {


  render() {
    return (

      <div className="right">
        <Card bg="dark" text="white" style={{ width: '18rem' }}>
          <Card.Header>Current weather</Card.Header>
          <Card.Body>
            {this.props.city && <Card.Title>{this.props.city}, {this.props.country}</Card.Title>}
            {!this.props.city && <Card.Title>This place</Card.Title>}
            <Card.Text>
              Temperature: {this.props.temperature}°C
                             </Card.Text>
          </Card.Body>
        </Card>
        <br />

        {this.props.date[0] && <Card bg="light" style={{ width: '18rem' }}>
          <Card.Header>{monthNames[this.props.date[0].getMonth()] + ' ' + this.props.date[0].getDate().toString() + 'th'}</Card.Header>
          <Card.Body>
            <Card.Title>Temperature: {this.props.forecast[0]}°C</Card.Title>
            <Card.Text>
              Conditions: {this.props.description[0]}

            </Card.Text>
          </Card.Body>
        </Card>}
        <br />


        {this.props.date[0] && <Card bg="light" style={{ width: '18rem' }}>
          <Card.Header>{monthNames[this.props.date[1].getMonth()] + ' ' + this.props.date[1].getDate().toString() + 'th'}</Card.Header>
          <Card.Body>
            <Card.Title>Temperature: {this.props.forecast[1]}°C</Card.Title>
            <Card.Text>
              Conditions: {this.props.description[1]}

            </Card.Text>
          </Card.Body>
        </Card>}
        <br />


        {this.props.date[0] && <Card bg="light" style={{ width: '18rem' }}>
          <Card.Header>{monthNames[this.props.date[2].getMonth()] + ' ' + this.props.date[2].getDate().toString() + 'th'}</Card.Header>
          <Card.Body>
            <Card.Title>Temperature: {this.props.forecast[2]}°C</Card.Title>
            <Card.Text>
              Conditions: {this.props.description[2]}

            </Card.Text>
          </Card.Body>
        </Card>}
        <br />

        {this.props.date[0] && <Card bg="light" style={{ width: '18rem' }}>
          <Card.Header>{monthNames[this.props.date[3].getMonth()] + ' ' + this.props.date[3].getDate().toString() + 'th'}</Card.Header>
          <Card.Body>
            <Card.Title>Temperature: {this.props.forecast[0]}°C</Card.Title>
            <Card.Text>
              Conditions: {this.props.description[3]}

            </Card.Text>
          </Card.Body>
        </Card>}
        <br />

        {this.props.date[4] && <Card bg="light" style={{ width: '18rem' }}>
          <Card.Header>{monthNames[this.props.date[4].getMonth()] + ' ' + this.props.date[4].getDate().toString() + 'th'}</Card.Header>
          <Card.Body>
            <Card.Title>Temperature: {this.props.forecast[4]}°C</Card.Title>
            <Card.Text>
              Conditions: {this.props.description[4]}

            </Card.Text>
          </Card.Body>
        </Card>}
        <br />



      </div>

    )
  }
}
