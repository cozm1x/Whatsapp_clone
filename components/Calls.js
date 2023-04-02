import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';


const Calls= (props) => {

    return (
        <TouchableOpacity activeOpacity={0.5}>
            <View style={styles.message}>
                <Ionicons name="person-circle-sharp" size={60} color="#DBDBDB" />
                
                <View style={styles.msg}>
                    <View style={styles.msginfo }>
                        <Text style={styles.name}>{props.name}</Text>
                        <View style={styles.row}>
                            <MaterialIcons name={props.missed === true? 'call-received': 'call-made'} size={20} color={props.missed === true? 'red': '#59BD5E'} />
                            <Text style={styles.sub}>{props.time}</Text>
                        </View>
                    </View>
                    <MaterialIcons name={props.vid === true? 'videocam': 'call'} size={25} color="#075E54" style={styles.center} />
                </View>
            </View>
        </TouchableOpacity>
    );
}

export default Calls;
  
const styles = StyleSheet.create({
    message: {
        flexDirection:'row',
        marginTop: 10,
        marginHorizontal: 15,
    },

    msg: {
        flexDirection:'row',
        justifyContent:'space-between',
        borderBottomColor: '#DBDBDB',
        borderBottomWidth: 1,
        flex: 1,
        marginLeft: 5,
        marginRight: 5,
        paddingBottom: 5,
        paddingTop:5,
    },

    center: {
        alignSelf:'center'
    },

    msginfo: {
        flexDirection:'column',
        alignSelf:'center',
    },

    row: {
        flexDirection:'row',
    },


    name: {
        fontWeight: 'bold',
        fontSize: 17,
        marginBottom: 2,
    },

    sub: {
        fontSize: 14,
    },

    time: {
        color: '#59BD5E',
        marginBottom: 3,
        fontSize: 12,
    },

    num: {
        padding: 5,
        paddingLeft:10,
        paddingRight: 10,
        borderRadius: 15,
        backgroundColor: '#59BD5E',
        color:'white',
        alignSelf: 'flex-end',
        fontSize: 12,
    },
});
  