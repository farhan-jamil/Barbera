import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigations from './src/side/user/navigation/StackNavigations';
const App = () => {
  return (
    <NavigationContainer>
      <StackNavigations />
    </NavigationContainer>
  );
};
export default App;
