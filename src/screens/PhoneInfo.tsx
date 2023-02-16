import React, { useState } from 'react'
import { Button, ScrollView, StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import { getUniqueId, getInstanceId, getBrand, getDeviceId, getSystemVersion, getSystemName } from 'react-native-device-info';


export const PhoneInfo = () => {
  
    const [info, setInfo] = useState<Object>();
    const [UID, setUID] = useState("");
    
    const {width, height} = useWindowDimensions()
    console.log("Width, Height: ", width, height)
    
    getInstanceId().then((instanceId) => {
        setUID(instanceId)
      });

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
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>Informacion de telefono</Text>
            </View>

            <Button 
                title='Informacion del Telefono'
                onPress={() => getInfoData()}
            />
            <Text></Text>
            {/* <TouchableHighlight 
                style={ styles.boton }
                onPress={() => callApi()}
            >
                <Text>PUSH</Text>
            </TouchableHighlight> */}

            <ScrollView>
                <Text>{ JSON.stringify(info, null, 3) }</Text>
            </ScrollView>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 20,
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
      marginBottom: 20,
      marginTop: 20
    }
  });
  