import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Animated, {Easing} from 'react-native-reanimated';

const { Value, timing } = Animated;


class CollapseHeader extends React.Component {

    constructor(props){
        super(props)

        this._scroll_y = new Value(0)
    }

    render(){

        const diffClampScrolly = Animated.diffClamp(this._scroll_y, 0, 50);

        const headerHeight = Animated.interpolateNode( diffClampScrolly, {
            inputRange: [0, 50],
            outputRange: [50, 0],
            extrapolate: 'clamp' 
        })
        
        const headerTranslatey = Animated.interpolateNode( diffClampScrolly, {
            inputRange: [0, 50],
            outputRange: [0, -50],
            extrapolate: 'clamp' 
        })
        
        const headerOpacity = Animated.interpolateNode( diffClampScrolly, {
            inputRange: [0, 50],
            outputRange: [1, 0],
            extrapolate: 'clamp' 
        })

    return (

        <Animated.View style={[styles.header,
            {
                height: headerHeight,
                transform: [{translateY: headerTranslatey}],
                opacity: headerOpacity,
            }
            ]}>
            <Text style={{fontSize:20, color:'white'}}>WhatsApp</Text>
            <View style={styles.iconbox}>
                <MaterialCommunityIcons name="magnify" size={24} color="white" />
                <MaterialCommunityIcons name="dots-vertical" size={24} color="white" />
            </View>
        </Animated.View>
    );
}}

export default CollapseHeader;


const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
    },

    iconbox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '20%',
    },


})