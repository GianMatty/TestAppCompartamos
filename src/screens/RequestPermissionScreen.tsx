import React, {useContext} from 'react';
import { TouchableOpacity } from 'react-native';
import {StyleSheet, Text, View} from 'react-native';
import {PermissionsContext} from '../context/PermissionsContext';
import { fonts } from '../theme/appTheme';

export const RequestPermissionsScreen = () => {
  const {permissions, askLocationPermission } = useContext(PermissionsContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Es necesario el uso del GPS para usar esta aplicación{' '}
      </Text>

      <TouchableOpacity
            onPress={ askLocationPermission }
            activeOpacity={ 0.9 }
            style={styles.button}
        >
            <Text style={ styles.buttonText }>Solicitar Permiso</Text>
        </TouchableOpacity>

      <Text style={{marginTop: 20, fontFamily: fonts.font_bold}}>
        {`Estado del Permiso del GPS: ${permissions.locationStatus.toUpperCase()}`}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  title: {
    width: 250,
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
    fontFamily: fonts.font_bold
  },
  button: {
    height: 45,
    width: 200,
    backgroundColor: 'black',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
        width: 0,
        height: 3
    },
    shadowOpacity: 0.27,
    elevation: 6
  },
  buttonText: {
        color: 'white',
        fontSize: 18,
        fontFamily: fonts.font_bold,
  }
});