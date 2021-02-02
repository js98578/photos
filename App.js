import React from 'react';
import PhotosContainer from './src/components/containers/PhotosContainer';
import PhotoDetailsContainer from './src/components/containers/PhotoDetailsContainer';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={PhotosContainer} />
        <Stack.Screen name="PhotoDetails" component={PhotoDetailsContainer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
