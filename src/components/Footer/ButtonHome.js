import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function ButtonHome({size, color}){
    return(
        <View style={styles.container}>
          <Icon name="home-outline" size={size} color={color} />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#be688c',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,

    }
})