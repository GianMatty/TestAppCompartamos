import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { PermissionsProvider, PermissionsContext } from './src/context/PermissionsContext';
import { Navigator } from './src/navigator/Navigator';

const Tab = createMaterialBottomTabNavigator();


const App = () => {
    
    const AppState = ({children}: any) => {
        return <PermissionsProvider>{children}</PermissionsProvider>;
    };
    
    return (
        <NavigationContainer>
            <AppState>
                <Navigator />
            </AppState>
        </NavigationContainer>
    );

}


export default App
