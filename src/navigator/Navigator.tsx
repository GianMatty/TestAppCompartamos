import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import React, { useContext } from 'react'
import  Icon  from 'react-native-vector-icons/Ionicons';
import { Loading } from '../components/Loading';
import { PermissionsContext } from '../context/PermissionsContext';
import { CallApi } from '../screens/CallApi';
import { Form } from '../screens/Form';
import { MapsScreen } from '../screens/MapsScreen';
import { PhoneInfo } from '../screens/PhoneInfo';
import { RequestPermissionsScreen } from '../screens/RequestPermissionScreen';

const Tab = createMaterialBottomTabNavigator();

export const Navigator = () => {

    const {permissions} = useContext(PermissionsContext);
    console.log(permissions)
    
    if(permissions?.locationStatus === 'unavailable') {
        return <Loading />
    }
    
  return (
    <Tab.Navigator
        barStyle={{ backgroundColor: 'skyblue' }}
    >
        {
            ( permissions?.locationStatus === 'granted' )
                ? <Tab.Screen 
                    name="Maps" 
                    component={MapsScreen} 
                    options={ ({route}) => ({
                        tabBarIcon: ({ color }) => {
                            return <Icon name="navigate-sharp" size={ 20 } color={ color } />
                        },

                    }) }
                    />
                : <Tab.Screen 
                    
                    name="RequestPermission" 
                    component={RequestPermissionsScreen} 
                    options={ ({route}) => ({
                        title: 'Maps',
                        tabBarIcon: ({ color }) => {
                            return <Icon name="navigate-sharp" size={ 20 } color={ color } />
                        },
                    }) }
                    />
        }
    
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
  )
}
