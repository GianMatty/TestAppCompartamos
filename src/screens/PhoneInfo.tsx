import React, { useState } from 'react'
import { Button, ScrollView, StyleSheet, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native'
import { getUniqueId, getInstanceId, getBrand, getDeviceId, getSystemVersion, getSystemName } from 'react-native-device-info';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { fonts } from '../theme/appTheme';


export const PhoneInfo = () => {

    const { top } = useSafeAreaInsets();
  
    const [info, setInfo] = useState<Object>();
    const [UID, setUID] = useState("");
    
    const {width, height} = useWindowDimensions()
    
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
        <View style={{...styles.container,marginTop:top}}>
            <View>
                <Text style={styles.title}>Informacion de telefono</Text>
            </View>

            <TouchableOpacity
                style={ styles.boton }
                onPress={() => getInfoData()}
            >
                <Text style={styles.textBoton}>Informacion del Telefono</Text>
            </TouchableOpacity>
            <Text></Text>
            
            <ScrollView>
                <Text style={{fontFamily: fonts.font_bold}}>{ JSON.stringify(info, null, 3) }</Text>
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
        backgroundColor: '#009BF2',
        width: '100%',
        marginHorizontal: 0,
        justifyContent: 'center',
        borderRadius: 16
      },
      textBoton: {
        color: 'white',
        textAlign: 'center',
        fontSize: 16,
        paddingVertical: 8,
        fontFamily: fonts.font_bold,
      },
    title: {
      textAlign: 'center',
      fontWeight: "600",
      fontSize: 24,
      marginBottom: 20,
      marginTop: 20,
      fontFamily: fonts.font_bold,
    }
  });
  