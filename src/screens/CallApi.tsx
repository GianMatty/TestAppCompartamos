import React, { useState } from 'react'
import { ActivityIndicator, Button, ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { fonts } from '../theme/appTheme';

export const CallApi = () => {
  
    const { top } = useSafeAreaInsets();

    const [data, setData] = useState();
    const [loading, setLoading] = useState(false);
 
    const callApi = async () => {
        const resp = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await resp.json();
        setData(data)

        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 5000);
    }

    // const loadingTest = () => {
    //     console.log("hola nuevo prueba")
    //     return (
    //         <Text>Hola mami</Text>
    //     )
    // }

    return (
        <View style={{...styles.container,marginTop:top}}>
            <View>
                <Text style={styles.title}>Consumo de Api</Text>
            </View>

            {/* <Button 
                title='Call Api'
                onPress={() => callApi()}
            /> */}
            <TouchableOpacity
                style={ styles.boton }
                onPress={() => callApi()}
            >
                <Text style={styles.textBoton}>Call API</Text>
            </TouchableOpacity>
            <Text></Text>
            <ScrollView>
                { loading ? <ActivityIndicator size="large" color={"black"} /> : <Text style={{fontFamily: fonts.font_bold}}>{ JSON.stringify(data, null, 3) }</Text> }
            </ScrollView>
        </View>
    )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    fontFamily: fonts.font_bold,
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
