import React, { useState } from 'react'
import { Button, ScrollView, StyleSheet, Text, TouchableHighlight, useWindowDimensions, View } from 'react-native'
import { useApi } from './src/useApi';
import { getUniqueId, getInstanceId, getBrand, getDeviceId, getSystemVersion, getSystemName } from 'react-native-device-info';

const App = () => {

    const [data, setData] = useState();
    const [info, setInfo] = useState({});
    const [UID, setUID] = useState("");
    console.log("marca del telefono: ", getBrand())
    console.log("modelo: ", getDeviceId())
    console.log("Sistema Operativo: ", getSystemName())
    console.log("version de android: ", getSystemVersion())
    
    const {width, height} = useWindowDimensions()
    console.log("Width, Height: ", width, height)
    
    getInstanceId().then((instanceId) => {
        console.log("UUID: ", instanceId)
        setUID(instanceId)
      });

 
    const callApi = async () => {
        const resp = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await resp.json();
        setData(data)
    }

    const getInfoData = () => {
        setInfo({
            "marca del telefono": getBrand(),
            "modelo": getDeviceId(),
            "Sistema Operativo": getSystemName(),
            "version de android": getSystemVersion(),
            "Ancho en Pixeles del telefono": width,
            "Alto en Pixeles del telefono": height,
            "UUID": UID,
        })
    }

  return (
    <View>
      <View>
        <Text style={styles.title}>Consumo de Api</Text>
      </View>

      <Button 
        title='Call Api'
        onPress={() => callApi()}
      />
        <Text></Text>
      <Button 
        title='Informacion del Telefono'
        onPress={() => getInfoData()}
      />
      {/* <TouchableHighlight 
        style={ styles.boton }
        onPress={() => callApi()}
      >
        <Text>PUSH</Text>
      </TouchableHighlight> */}

      <ScrollView>
        <Text>{ JSON.stringify(data, null, 3) }</Text>
        <Text>{ JSON.stringify(info, null, 3) }</Text>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue'
  },
  boton: {    
    backgroundColor: 'skyblue',
    width: 120,
    marginHorizontal: 0
  },
  title: {
    textAlign: 'center',
    fontWeight: "600",
    fontSize: 24,
    marginBottom: 20
  }
});

export default App
