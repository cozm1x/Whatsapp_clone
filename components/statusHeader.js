import { StyleSheet, Text, TouchableOpacity, View, Image, SafeAreaView } from 'react-native';
import { MaterialCommunityIcons, MaterialIcons, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';



export default function StatusHeader(props,{navigation}){

    const touch = () => {
        console.log('touched dots');
    };

    return (
        <View style={styles.header}>
            <View style={{ flexDirection: 'row', marginLeft: 5,}}>
                <TouchableOpacity onPress={props.action} style={styles.bckbtn} activeOpacity={0.7}>
                    <Ionicons name="arrow-back-sharp" size={30} color="white"  />
                </TouchableOpacity>
                <Image style={styles.dp} source={{uri:props.img, width:45,height:45 }} />
            </View>
            <TouchableOpacity style={styles.msginfo}>
                    <Text numberOfLines={1} ellipsizeMode={'tail'} style={{fontSize:18, color:'white', fontWeight:'500',paddingBottom:1}}>{props.name}</Text>
                    <Text style={{fontSize:13,fontWeight:'200', color:'white', fontWeight:'500'}}>time</Text>
            </TouchableOpacity>
            <View style={styles.iconbox}>
                <TouchableOpacity >
                    <MaterialCommunityIcons name="dots-vertical" size={24} color="white"  style={styles.center} />
                </TouchableOpacity>
            </View>
        </View>

    );
}

  
const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingLeft: 5,
        paddingRight: 20,
        width:'100%',
        height: '8.5%',
    },
    
    iconbox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        flex: 2.5 ,
        position:'absolute',
        right: 0,
        marginRight: 20,
    },

    msginfo: {
        flexDirection:'column',
        alignSelf:'center',
        flex: 3,
    },

    bckbtn: {
        padding:5,
        alignSelf: 'center',
    },

    dp: {
        width: 45,
        height: 45,
        borderRadius: 25,
        alignSelf: 'center',
        marginRight:10,
    },
});
  