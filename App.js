import { StyleSheet, Text, View } from 'react-native';

import { SafeAreaProvider,SafeAreaView } from 'react-native-safe-area-context';
import TabNavigator from './Navigation/TabNavigation';
import ChatStackNavigator from './Navigation/StackNavigation';
import CollapseHeader from './components/collapsingHeader';
import ChatDetail from './screens/ChatDetailsScreen';
import ChatHeader from './components/chatHeader';
import Calling from './screens/CallScreen';


export default function App() {
  return (
    <SafeAreaProvider>
      <ChatStackNavigator />
      {/* <Calling /> */}
    </SafeAreaProvider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
