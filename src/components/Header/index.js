import React from 'react';
import { Text, View, Image } from 'react-native';

import styles from './styles';
import logo from '../../img/logoHeader.png';

export default function Header(){
   return(
        <View style={styles.header}>
            <View style={styles.fundologo}>
                <Image source={logo} style={styles.logo}/>
            </View>
        </View>
   );

}