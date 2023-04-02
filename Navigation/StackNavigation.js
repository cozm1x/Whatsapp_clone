import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from './TabNavigation';
import ChatDetail from '../screens/ChatDetailsScreen';
import { NavigationContainer } from '@react-navigation/native';
import Status from '../screens/StatusScreen';
import StatusDetail from '../screens/StatusDetailScreen';



const Stack = createNativeStackNavigator();

const ChatStackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRoutName="ChatList">
        <Stack.Screen name="ChatList" component={TabNavigator}  options={{headerShown:false}} />
        <Stack.Screen name="ChatDetail" component={ChatDetail} options={{headerShown:false}} />
        <Stack.Screen name="StatusList" component={TabNavigator}  options={{headerShown:false}} />
        <Stack.Screen name="StatusDetail" component={StatusDetail} options={{headerShown:false}} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}






export default ChatStackNavigator;