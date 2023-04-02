import { SafeAreaView, StyleSheet, ScrollView, StatusBar, TouchableHighlight, FlatList, View, TouchableOpacity} from 'react-native';
import React from 'react';
import Messages from '../components/Message';
import { MaterialIcons } from '@expo/vector-icons';
import c_mock_data from '../Data/CHAT_MOCK_DATA';
import { useNavigation } from '@react-navigation/native';

export default function ChatList({navigation}) {



  // mock_data.sort(function(a,b){
  //   return new Date(b.date_time + " "+b.time) - new Date(a.date_time + " "+a.time);
  // });
  
  
  // mock_data.sort(function(a,b){ return b.time>a.time; })
  // console.log(mock_data);

    return (
     <SafeAreaView style={styles.container}>
       
        <FlatList 
          keyExtractor={(item) => item.id}
          data={c_mock_data}
          renderItem={({item}) => (
            <Messages
            img = {item.image}
            name={item.contacts} 
            time={item.time}
            msg={item.words} 
            num={item.number}
            action={()=> {navigation.navigate('ChatDetail', {
              name:item.contacts,
              img:item.image,
            })
          }}
            />
          )}
        />

        <TouchableOpacity style={styles.newChat} activeOpacity={0.75} >
            <MaterialIcons name="chat" size={23} color="white" style={styles.newChatBtn} />
        </TouchableOpacity>
      </SafeAreaView>
    );
}
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  scrollView: {
    flex: 1,
    width: '100%',
    backgroundColor: '#FBFCFC',
  },

  newChat: {
    alignSelf: 'flex-end',
    position:'absolute',
    top: '90%',
    right: '5%',
    zIndex: 1,
    elevation: 1,
  },

  newChatBtn: {
    padding: 20,
    borderRadius: 35,
    backgroundColor: '#59BD5E',
    elevation: 5,
  },

});
  