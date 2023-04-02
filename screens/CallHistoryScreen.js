import { View , SafeAreaView, StyleSheet, ScrollView, StatusBar, TouchableOpacity} from 'react-native';
import React from 'react';
import Calls from '../components/Calls';
import { MaterialIcons } from '@expo/vector-icons';

export default function CallHistory() {
  return (
    <View style={styles.container}>
        <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
          <Calls name='Abdul' time='6 minutes ago' missed={false} vid={false}/>
          <Calls name='Mummy' time='(2) 48 minutes ago' missed={true} vid={false}/>
          <Calls name='Finn' time='Yesterday, 7:16 AM' missed={false} vid={true}/>
        </ScrollView>
        <TouchableOpacity style={styles.newCall} activeOpacity={0.7}>
          <MaterialIcons name="add-call" size={23} color="white" style={styles.newCallBtn} />
        </TouchableOpacity>
    </View>
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

  newCall: {
    alignSelf: 'flex-end',
    position:'absolute',
    top: '90%',
    right: '5%',
    zIndex: 1,
    elevation: 1,
  },

  newCallBtn: {
    padding: 20,
    borderRadius: 35,
    backgroundColor: '#59BD5E',
    elevation: 5,
  },

});
  