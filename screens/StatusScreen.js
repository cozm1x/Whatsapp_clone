import { SafeAreaView, StyleSheet, ScrollView, StatusBar, TouchableOpacity, View, Image, Text, FlatList} from 'react-native';
import React from 'react';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import UserStatus  from '../components/userStatus';
import ContactStatus from '../components/contactStatus';
import s_mock_data from '../Data/STATUS_MOCK_DATA ';

export default function Status({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView nestedScrollEnabled={true} style={styles.scrollView} >
          <UserStatus />

          <Text style={styles.txt}>Recent updates</Text>
            <FlatList 
              ScrollEnabled={true}
              keyExtractor={(item) => item.id}
              data={s_mock_data}
              renderItem={({item}) => (
              <ContactStatus
              img = {item.image}
              name={item.name} 
              time={item.time}
              seen={true}
              action={()=> {navigation.navigate('StatusDetail', {
                name:item.name,
                img:item.image,
              })
            }}
              />
            )}
          />

          <Text style={styles.txt}>Viewed updates</Text>
         
        
        </ScrollView>
        <TouchableOpacity style={styles.txtStatus} activeOpacity={0.7}>
        <MaterialCommunityIcons name="pencil" size={24} color="#3C443C" style={styles.txtStatusBtn} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.imgStatus} activeOpacity={0.7}>
          <FontAwesome name="camera" size={23} color="white" style={styles.imgStatusBtn} />
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
    height: '100%'
  },

  txt: {
    fontSize: 15,
    color: '#585F58',
    fontWeight: 'bold',
    paddingTop: 15,
    marginLeft: 10,
  },

  txtStatus: {
    alignSelf: 'flex-end',
    position:'absolute',
    top: '82%',
    right: '7%',
    zIndex: 1,
    elevation: 1,
  },

  imgStatus: {
    alignSelf: 'flex-end',
    position:'absolute',
    top: '90%',
    right: '5%',
    zIndex: 1,
    elevation: 1,
  },

  txtStatusBtn: {
    padding: 10,
    borderRadius: 35,
    backgroundColor: '#F1F0EE',
    elevation: 5,
  },

  imgStatusBtn: {
    padding: 20,
    borderRadius: 35,
    backgroundColor: '#59BD5E',
    elevation: 5,
  },
});