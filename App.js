import React from 'react';
import PhotosContainer from './src/components/containers/PhotosContainer';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import PhotoDetails from './src/components/scenes/PhotoDetails';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Photos Home" component={PhotosContainer} />
        <Stack.Screen name="Photo Details" component={PhotoDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
