import 'react-native-gesture-handler';
import React from 'react';
import { View, Text } from 'react-native';
import { Navigation } from './src/navigation';
import { AuthProvider } from './src/context/auth';

const App = () => {
  return (
    <>
      <AuthProvider>
        <Navigation />
      </AuthProvider>
    </>
  );
};

export default App;
