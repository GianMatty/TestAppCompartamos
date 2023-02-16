import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { PhoneInfo } from './src/screens/PhoneInfo';
import { CallApi } from './src/screens/CallApi';
import Icon from 'react-native-vector-icons/Ionicons';
import { Form } from './src/screens/Form';

const Tab = createMaterialBottomTabNavigator();


const App = () => {

    return (
        <NavigationContainer>
            <Tab.Navigator
                barStyle={{ backgroundColor: 'skyblue' }}
            >
                <Tab.Screen 
                    name="CallApi" 
                    component={CallApi} 
                    options={ ({route}) => ({
                        tabBarIcon: ({ color }) => {
                            return <Icon name="cloud-download-sharp" size={ 20 } color={ color } />
                        }
                    }) }
                />
                <Tab.Screen 
                    name="PhoneInfo" 
                    component={PhoneInfo} 
                    options={ ({route}) => ({
                        tabBarIcon: ({ color }) => {
                            return <Icon name="phone-portrait-sharp" size={ 20 } color={ color } />
                        }
                    }) }
                />
                <Tab.Screen 
                    name="Form" 
                    component={Form} 
                    options={ ({route}) => ({
                        tabBarIcon: ({ color }) => {
                            return <Icon name="document-text-sharp" size={ 20 } color={ color } />
                        }
                    }) }
                />
            </Tab.Navigator>
        </NavigationContainer>
    );

}


export default App
