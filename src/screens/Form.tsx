import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  ScrollView,
  Text,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import {useForm} from '../hooks/useForm';
import { fonts } from '../theme/appTheme';

export const Form = () => {

  const { top } = useSafeAreaInsets();

  const {form, onChange } = useForm({
    name: '',
  });

  return (
      <ScrollView>
          <View style={{...styles.container,marginTop:top}}>
            <View>
                <Text style={styles.title}>Formulario</Text>
            </View>

            <TextInput
              style={styles.inputStyle}
              placeholder="Ingrese su nombre"
              autoCorrect={false}
              autoCapitalize="words"
              onChangeText={value => onChange(value, 'name')}
            />

            <Text style={{fontFamily: fonts.font_bold}}>Me Llamo:</Text>
            <Text style={styles.name}>"{form.name}"</Text>

            <View style={{height: 100}} />

          </View>
      </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  inputStyle: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.3)',
    height: 50,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 20,
    fontFamily: fonts.font_bold,
  },
  title: {
    textAlign: 'center',
    fontWeight: "600",
    fontSize: 24,
    marginBottom: 20,
    marginTop: 20,
    fontFamily: fonts.font_bold,
  },
  name: {
    marginTop: 16,
    fontSize: 40,
    color: 'brown',
    fontFamily: fonts.font_bold,
  }
});