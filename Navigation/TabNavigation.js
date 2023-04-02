
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { StyleSheet, Text, View } from 'react-native';
import Cam from '../screens/CamScreen';
import Status from '../screens/StatusScreen';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { FontAwesome } from '@expo/vector-icons';
import ChatList from '../screens/ChatListScreen';
import CallHistory from '../screens/CallHistoryScreen';

const Tab = createMaterialTopTabNavigator();

export default function TabNavigator() {

    const green = '#68DB6E';
    const insets = useSafeAreaInsets();

          
      return(
      
        <Tab.Navigator
            initialRouteName='Chats'
            screenOptions={({ route }) => ({
              tabBarIndicatorStyle: { backgroundColor: 'white'},
              tabBarActiveTintColor: 'white',
              tabBarInactiveTintColor: '#d8d8d8cb',
              tabBarStyle: {
                paddingVertical: Platform.OS === 'ios' ? 20 : 0,
                marginTop:insets.top,
                backgroundColor:'#075E54',
              },
              tabBarLabelStyle: { fontSize: 13, fontWeight: 'bold' },
            })}
              >
          <Tab.Screen name="Camera" component={Cam} options={{tabBarLabel:() => {
            return <FontAwesome name="camera" size={20} color="#d8d8d8cb" />} }}/>
          <Tab.Screen name="Chats" component={ChatList}  options={{ tabBarLabel: 'CHATS' }} />
          <Tab.Screen name="Status" component={Status} options={{ tabBarLabel: 'STATUS' }} />
          <Tab.Screen name="Calls" component={CallHistory} options={{ tabBarLabel: 'CALLS' }} />
        </Tab.Navigator>
      
      )
    }
    

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  headerContainer: {
    top: 0,
    left: 0,
    right: 0,
    position: "absolute",
  },
});
