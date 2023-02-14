import React, { useState } from 'react'
import { Button, ScrollView, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import { useApi } from './src/useApi';

const App = () => {

    const [data, setData] = useState();

    const callApi = async () => {
        const resp = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await resp.json();
        setData(data)
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
      {/* <TouchableHighlight 
        style={ styles.boton }
        onPress={() => callApi()}
      >
        <Text>PUSH</Text>
      </TouchableHighlight> */}

      <ScrollView>
        <Text>{ JSON.stringify(data, null, 3) }</Text>
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
