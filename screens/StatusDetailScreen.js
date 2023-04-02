import { View ,Text, SafeAreaView, StyleSheet,StatusBar, TouchableOpacity, Image, ImageBackground} from 'react-native';
import React from 'react';
import { useRoute } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons';
import StatusHeader from '../components/statusHeader';

export default function StatusDetail({ navigation }) {

  const route = useRoute()

 function timer() {
     setTimeout(()=>{navigation.goBack()}, 5000);};

  return (
    <SafeAreaView style={styles.container}>  
      <StatusBar />
      <View style={styles.imgbox}>
        <StatusHeader
          name= {route.params.name}
          img= {route.params.img}
          action={()=> {navigation.goBack()}}
        />
        
        <Image source={{uri:route.params.img}} style={{width: '100%', flex:1, bottom:30,}} resizeMode={'contain'} onLoad={timer}/>
        <View style={styles.replybox}>
          <Entypo name="chevron-up" size={20} color="white" style={{alignSelf:'center'}} />
          <Text style={{color:'white', fontSize:15}} >REPLY</Text>
        </View>
      </View>
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },

  progress: {
    width:undefined,
    height:100,
    top: 20,
  },

  imgbox: {
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems:'center',
    width: '100%',
    height: '100%',
  },

  replybox: {
    flexDirection: 'column',
    alignContent: 'center',
    position: 'absolute',
    bottom: 0,
    margin: 20,
  },

});
  