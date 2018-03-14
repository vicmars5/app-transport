import React from 'react'
import { View, Text } from 'react-native'
import MapView, { Marker } from 'react-native-maps'

export default class Map extends React.Component {

  static navigationOptions = {
    title: 'Mapa'
  }

  constructor() {

    super()

    this.state = {
      region: {
        latitude: 20.647181,
        longitude: -103.32104,
        latitudeDelta: 0.01012003426674,
        longitudeDelta: 0.01373290948424
      },
      stations: [{
        _id: '59815b096cf06c1e8a4353d0',
        name: 'Home Depot',
        __v: 0,
        location: {
          coordinates: [
            -103.34882,
            20.666378
          ],
          type: 'Point'
        }
      }]
    }

    this.getBycicleStations()
  }

  onRegionChange(region) {

    this.setState({ region })
  }

  render() {


    return (<View style={{ flex: 1 }}>
      <MapView
        region={this.state.region}
        onRegionChange={this.onRegionChange.bind(this)}
        style={{ flex: 1 }}>
        {this.state.stations.map(marker => (
          <Marker
            key={marker._id}
            coordinate={{
              longitude: marker.location.coordinates[0],
              latitude: marker.location.coordinates[1]
            }}
            description={marker.name}
          />
        ))}
      </MapView>
    </View>)
  }

  getBycicleStations() {

    fetch(`https://server-libreria-hhlsjcssue.now.sh/bike-stations/`)
      .then(res => res.json())
      .then(res => {
        this.setBycicleStationsState(res)
      })
      .catch(e => console.error(e))
  }

  setBycicleStationsState (stations) {
    console.warn(`Stations: `, JSON.stringify(stations, null, 2))
    this.setState(prevState => {
      prevState.stations = stations
      return prevState
    })
  }
}
