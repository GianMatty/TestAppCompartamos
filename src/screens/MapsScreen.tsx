import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
// import carImage from '../../assets/image/logo-com.png'
// import carImge = require('../')

export const MapsScreen = () => {

    const { top } = useSafeAreaInsets();

    const [ubicacion, setUbicacion] = useState({
        latitude: -12.040864422966239,
        longitude: -76.93189372684638
    })

  return (
    <View style={{...styles.container,marginTop:top}}>
        <View>
            <Text style={styles.title}>Google Maps Integrado</Text>
        </View>
        <MapView 
            style={styles.map}
            initialRegion={{
                latitude: ubicacion.latitude,
                longitude: ubicacion.longitude,
                latitudeDelta: 0.04,
                longitudeDelta: 0.05,

            }}
        >
            <Marker 
                style={{width: 10, height: 10}}
                
                coordinate={ubicacion}
                image={require("../../assets/image/logo-com4.png")}
            />
        </MapView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20,
  },
  map: {
    width: '100%',
    height: '50%'
  },
  title: {
    textAlign: 'center',
    fontWeight: "600",
    fontSize: 24,
    marginBottom: 20,
    marginTop: 20
  }
});