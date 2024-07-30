import {NativeBaseProvider, StatusBar} from 'native-base';
import React from 'react';
import RootNavigator from './src/navigation/RootNavigation';
import Colors from './src/contans/Colors';
function App() {
  return (
    <NativeBaseProvider>
      <RootNavigator />
      <StatusBar
        barStyle="light-content"
        backgroundColor={Colors.PRIMARY_BLUE}
      />
    </NativeBaseProvider>
  );
}

export default App;
