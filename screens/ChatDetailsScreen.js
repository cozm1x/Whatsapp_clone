import { View ,Text, SafeAreaView, StyleSheet, ScrollView, StatusBar, TouchableOpacity, ImageBackground} from 'react-native';
import React, { useState, useCallback, useEffect } from 'react';
import { Bubble, GiftedChat, InputToolbar } from 'react-native-gifted-chat';
import ChatHeader from '../components/chatHeader';
import { useRoute } from '@react-navigation/native';

export default function ChatDetail({ navigation }) {

  const route = useRoute()

  const [isTyping, setIsTyping] = useState(true)
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'hello user',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
      {
        _id: 2,
        text: 'hello comp',
        createdAt: new Date(),
        user: {
          _id: 1,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ])
  }, [])

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
  }, [])

  const renderBubble = (props) => {
    return (
      <Bubble 
        {...props}
        wrapperStyle={{
          right:{
            backgroundColor: '#B2FCFC'
          }
        }}
        textStyle={{
          right:{
            color:'black'
          }
        }}
        tickStyle={{
          right:{
            color:'black'
          }
        }}

      />
    )
  }

  // const renderInputToolbar = (props) => {
  //   return(
  //     <InputToolbar />
  //   )
  // }


  return (
    <SafeAreaView style={styles.container}>  
      <StatusBar />
      <ChatHeader 
        name= {route.params.name}
        img= {route.params.img}
        action={()=> {navigation.goBack()}}
        sts = {isTyping? "typing..." : "online"}
        />
      <ImageBackground source={require('../assets/images/stars.png')} style={styles.chatbox}>

        <GiftedChat
        style ={styles.inputbar}
        messages={messages}
        onSend={messages => onSend(messages)}
        user={{
          _id: 1,
        }}
        renderBubble = {renderBubble}
        isTyping = {isTyping}
        // timeTextStyle={{right: { color: 'black' } }}
        // renderInputToolbar = {renderInputToolbar}
        />

      </ImageBackground>
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  chatbox: {
    flex: 1,
  },

  inputbar: {
    backgroundColor: 'red'
  },

});
  