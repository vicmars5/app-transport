import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'

export default class Map extends React.Component {
  static navigationOptions = {
    title: 'Movilidad GDL'
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={{ flex: 1 }}>
        <Text> Hello </Text>
        <Button
          onPress={ () => navigate('Map') }
          title="Ir al mapa"
          />
      </View>
    )
  }
}


