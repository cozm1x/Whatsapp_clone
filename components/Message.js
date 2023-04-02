import { StyleSheet, Text, TouchableOpacity, View , Image} from 'react-native';
import { Ionicons } from '@expo/vector-icons';


const Messages = (props) => {

    return (
        <TouchableOpacity 
            activeOpacity={0.5}
            onPress={props.action}>
            <View style={styles.message}>
                
                <Image style={styles.dp} source={{uri:props.img, width:45,height:45 }} />
                
                <View style={styles.msg}>
                    <View style={[styles.msginfo , styles.grp]}>
                        <Text style={styles.name}>{props.name}</Text>
                        <View style={{minWidth:'50%', maxWidth:'90%'}}>
                            <Text numberOfLines={1} ellipsizeMode={'tail'} style={styles.sub}>{props.msg}</Text>
                        </View>
                    </View>
                    <View style={[styles.msginfo, styles.grp]}>
                        <Text style={styles.time}>{props.date}{props.time}</Text>
                        <Text style={styles.num}>{props.num}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
}

export default Messages;
  
const styles = StyleSheet.create({
    message: {
        flexDirection:'row',
        marginTop: 6,
        marginHorizontal: 15,
    },

    msg: {
        flexDirection:'row',
        justifyContent:'space-between',
        borderBottomColor: '#DBDBDB',
        borderBottomWidth: 1,
        flex: 1,
        marginHorizontal: 5,
        marginLeft:10,
        paddingBottom: 5,
        paddingTop:5,
    },

    msginfo: {
        flexDirection:'column',
    },

    grp: {
        alignSelf:'center',
    },

    dp: {
        borderRadius: 25,
        alignSelf: 'center',
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
        paddingHorizontal: 10,
        borderRadius: 15,
        backgroundColor: '#59BD5E',
        color:'white',
        alignSelf: 'flex-end',
        fontSize: 12,
    },
});
  