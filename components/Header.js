import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const Header = () => {

    return (
        <View style={styles.header}>
            <Text style={{fontSize:20, color:'white', fontWeight:'500'}}>WhatsApp</Text>
            <View style={styles.iconbox}>
                <MaterialCommunityIcons name="magnify" size={24} color="white" />
                <MaterialCommunityIcons name="dots-vertical" size={24} color="white" />
            </View>
        </View>
    );
}

export default Header;
  
const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15,
        backgroundColor: 'red',
        paddingTop: 15,
        paddingBottom: 20,
    },
    
    iconbox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '18%',
    },
});
  