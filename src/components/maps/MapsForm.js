import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import { monthNames } from '../../utils/constants'
import './Cards.css'

export default function MapsForm(props) {
    return (
      <div className="right">
        {!props.connectionError && <Card bg="dark" text="white" style={{ width: '18rem' }}>
          <Card.Header>Current weather</Card.Header>
          <Card.Body>
            {props.city && <Card.Title>{props.city}, {props.country}</Card.Title>}
            {!props.city && <Card.Title>This place</Card.Title>}
            <Card.Text>
              Temperature: {props.temperature}°C
              </Card.Text>
          </Card.Body>
        </Card>}
        <br />

        {props.date[0] && !props.connectionError && <Card bg="light" style={{ width: '18rem' }}>
          <Card.Header>{monthNames[props.date[0].getMonth()] + ' ' + props.date[0].getDate().toString() + 'th'}</Card.Header>
          <Card.Body>
            <Card.Title>Temperature: {props.forecast[0]}°C</Card.Title>
            <Card.Text>
              Conditions: {props.description[0]}
            </Card.Text>
          </Card.Body>
        </Card>}
        <br />

        {props.date[0] && !props.connectionError && <Card bg="light" style={{ width: '18rem' }}>
          <Card.Header>{monthNames[props.date[1].getMonth()] + ' ' + props.date[1].getDate().toString() + 'th'}</Card.Header>
          <Card.Body>
            <Card.Title>Temperature: {props.forecast[1]}°C</Card.Title>
            <Card.Text>
              Conditions: {props.description[1]}
            </Card.Text>
          </Card.Body>
        </Card>}
        <br />

        {props.date[0] && !props.connectionError && <Card bg="light" style={{ width: '18rem' }}>
          <Card.Header>{monthNames[props.date[2].getMonth()] + ' ' + props.date[2].getDate().toString() + 'th'}</Card.Header>
          <Card.Body>
            <Card.Title>Temperature: {props.forecast[2]}°C</Card.Title>
            <Card.Text>
              Conditions: {props.description[2]}
            </Card.Text>
          </Card.Body>
        </Card>}
        <br />

        {props.date[0] && !props.connectionError && <Card bg="light" style={{ width: '18rem' }}>
          <Card.Header>{monthNames[props.date[3].getMonth()] + ' ' + props.date[3].getDate().toString() + 'th'}</Card.Header>
          <Card.Body>
            <Card.Title>Temperature: {props.forecast[3]}°C</Card.Title>
            <Card.Text>
              Conditions: {props.description[3]}
            </Card.Text>
          </Card.Body>
        </Card>}
        <br />

        {props.date[4] && !props.connectionError && <Card bg="light" style={{ width: '18rem' }}>
          <Card.Header>{monthNames[props.date[4].getMonth()] + ' ' + props.date[4].getDate().toString() + 'th'}</Card.Header>
          <Card.Body>
            <Card.Title>Temperature: {props.forecast[4]}°C</Card.Title>
            <Card.Text>
              Conditions: {props.description[4]}
            </Card.Text>
          </Card.Body>
        </Card>}
        <br />
      </div>
    )
  }
