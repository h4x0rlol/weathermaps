import React, { Component } from 'react'
import { YMaps, Map, Circle, FullscreenControl, GeolocationControl, TypeSelector  } from 'react-yandex-maps';


export default class Maps extends Component {
    render() {
        return (
            <YMaps>
                <Map defaultState={{ center: [55.76, 37.64], zoom: 10,controls: [], }} width={1000} height={500}>
                    <Circle
                        geometry={[[55.76, 37.6], 10000]}
                        options={{
                            draggable: true,
                            fillColor: '#DB709377',
                            strokeColor: '#990066',
                            strokeOpacity: 0.8,
                            strokeWidth: 5,
                        }}
                    />
                    <FullscreenControl />
                    <GeolocationControl options={{ float: 'left' }} />
                    <TypeSelector options={{ float: 'right' }} />
                </Map>
            </YMaps>
        )
    }
}
