import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { Ionicons, Entypo } from '@expo/vector-icons';


const UserStatus = () => {
    return (
        <TouchableOpacity activeOpacity={0.5}>
            <View style={styles.status}>
                <Image style={styles.dp} source={require('../assets/images/mob.png')} />
                <View>
                    <View style={styles.plus}>
                        <Entypo name="plus" size={18} color="white" style={styles.plusBtn}/>
                    </View>
                    <View style={[styles.row]}>
                        <Text style={styles.name}>My Status</Text>
                        <Text style={styles.info}>Tap to add status update</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
}

export default UserStatus;
  
const styles = StyleSheet.create({
    status: {
        flexDirection:'row',
        marginBottom: 10,
        marginHorizontal: 20,
    },

    dp: {
       width: 50,
       height: 50,
       borderRadius: 25,
       alignSelf: 'center',
       marginTop: 25,
    },

    plus: {
        alignSelf: 'flex-start',
        position:'absolute',
        top: '75%',
        right: '95%',
    },

    plusBtn: {
        padding: 2,
        borderRadius: 35,
        backgroundColor: '#59BD5E',
        elevation: 5,
    },

    row: {
        flexDirection:'column',
        marginLeft: 15,
        marginTop: 30,
    },


    name: {
        fontWeight: 'bold',
        fontSize: 17,
        marginBottom: 2,
    },

    sub: {
        fontSize: 14,
    },

   
});
  