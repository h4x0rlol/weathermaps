import React, { Component } from 'react'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import Api from '../openweather/Api'


export default class Forms extends Component {
    render() {
        return (
            <div>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                    <Button onClick={() => {this.props.getWeather}} variant="primary">Get Weather</Button>
                    </InputGroup.Prepend>
                    <FormControl placeholder="Country..."/>
                    <FormControl placeholder="City..."/>
                </InputGroup>
            </div>
        )
    }
}
