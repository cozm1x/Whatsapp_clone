import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';


const ContactStatus = (props) => {
    return (
        <TouchableOpacity activeOpacity={0.5} onPress={props.action}>
            <View style={styles.status}>
                <View style={[ styles.ring,{borderColor: props.seen? '#59BD5E' : '#9CA0A2'}]}>
                    <Image style={styles.dp} source={{uri:props.img}} />
                </View>
                <View>
                    <View style={[styles.row]}>
                        <Text style={styles.name}>{props.name}</Text>
                        <Text style={styles.info}>{props.time}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
}

export default ContactStatus;
  
const styles = StyleSheet.create({
    status: {
        flexDirection:'row',
        marginHorizontal: 15,
    },

    dp: {
       width: 45,
       height: 45,
       borderRadius: 25,
       alignSelf: 'center',
    },

    ring: {
        marginTop: 25,
        borderWidth: 3.5,
        borderRadius: 30,
        padding: 1,   
    },

    plusBtn: {
        padding: 2,
        borderRadius: 35,
        backgroundColor: '#59BD5E',
        elevation: 5,
    },

    row: {
        flexDirection:'column',
        marginLeft: 10,
        marginTop: 25,
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
  