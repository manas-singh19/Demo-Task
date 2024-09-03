/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react'; 
import {
  SafeAreaView, 
  StatusBar,
  Text, 
  View,
  useColorScheme, 
} from 'react-native';

import {
  Colors, 
} from 'react-native/Libraries/NewAppScreen';
 
import ScreenWrapper from './src/screenWrapper'; // Ensure this import is necessary and correct
import AppStack from './src/navigations';
// export const AppStack = () => { 
//   return ( // Added return statement here
//     <View style={{ width: 100, height: 200, backgroundColor: 'pink' }}> 
//       <Text style={{ color: 'red' }}>Manas</Text>
//     </View>
//   );
// };
 
function App() {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <ScreenWrapper style={{ flex: 1, backgroundColor: backgroundStyle.backgroundColor }}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
     
        <AppStack />
      
    </ScreenWrapper>  
  );
}
 
export default App;