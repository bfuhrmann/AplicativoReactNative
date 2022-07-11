import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { format } from 'date-fns';


import styles from './styles';

//const img="https://tuctsp.com.br/app/caboclo.png";

export default function ListarAgenda({ide,image,title, when}){
    return(
        <TouchableOpacity style={styles.card}>
            <Image source={{uri: image}} style={styles.logoagenda}/>
            <View style={styles.cardleft}>
                <Text style={styles.cardTitle}>{title}</Text>
            </View>
            <View style={styles.cardRight}>
                <Text style={styles.cardDate}>{format(new Date(when),'dd/MM/yyyy')}</Text>
                <Text style={styles.cardTime}>{format(new Date(when), 'HH:mm')}</Text>
            </View>
        </TouchableOpacity>
        
        
    );
}