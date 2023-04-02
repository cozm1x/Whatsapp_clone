import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Animated } from 'react-native';


const ProgressBar = () => {

    const value = useState(new Animated.ValueXY({x: 0, y:0}))[0]

    function moveBar() {
        Animated.timing(value, {
            toValue: {x: 100, y: 100},
            duration: 5000,
            useNativeDriver: false
        }).start()
    }

    return (
        <View style={styles.header}>
           <Animated.View style={value.getLayout()}>
            <View style={styles.bar} />
           </Animated.View>
           <TouchableOpacity onPress={moveBar}><Text>press here</Text></TouchableOpacity>
        </View>
    );
}

export default ProgressBar;
  
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

    bar: {
        backgroundColor: 'black',
        height:2,
        width: '10%',

    },
    
    iconbox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '18%',
    },
});
  