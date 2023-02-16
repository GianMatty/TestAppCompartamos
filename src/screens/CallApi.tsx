import React, { useState } from 'react'
import { ActivityIndicator, Button, ScrollView, StyleSheet, Text, View } from 'react-native'

export const CallApi = () => {
  
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
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>Consumo de Api</Text>
            </View>

            <Button 
                title='Call Api'
                onPress={() => callApi()}
            />
            <Text></Text>
            {/* <TouchableHighlight 
                style={ styles.boton }
                onPress={() => callApi()}
            >
                <Text>PUSH</Text>
            </TouchableHighlight> */}
            <ScrollView>
                { loading ? <ActivityIndicator size="large" color={"black"} /> : <Text>{ JSON.stringify(data, null, 3) }</Text> }
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
