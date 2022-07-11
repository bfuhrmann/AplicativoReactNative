import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Agenda from '../../pages/Agenda';
import Contato from '../../pages/Contato';
import Home from '../../pages/Home';
import Noticias from '../../pages/Noticias';
import Preces from '../../pages/Preces';
import ButtonHome from './ButtonHome';

const Tab = createBottomTabNavigator();

export default function Footer(){
    return(
        <Tab.Navigator 
            tabBarOptions={{
                style:{
                    backgroundColor: '#a05172',
                    borderTopColor: 'transparent'
                },
                activeTintColor: '#dece77',
                inactiveTintColor: '#FFF',
                tabStyle:{
                    paddingBottom:5,
                    paddingTop:5,
                }
            }}
        >
            <Tab.Screen 
                name="Agenda" 
                component={Agenda}
                options={{
                    tabBarIcon: ({ size, color })=>(
                        <Icon name="calendar-month-outline" size={size} color={color} />
                    )
                }}
            />
            <Tab.Screen 
                name="Noticias" 
                component={Noticias} 
                options={{
                    tabBarIcon: ({ size, color })=>(
                        <Icon name="newspaper-variant-outline" size={size} color={color} />
                    )
                }}
            />
            <Tab.Screen 
                name="Home" 
                component={Home}
                options={{
                    tabBarLabel:'',
                    tabBarIcon: ({ size, color })=>(
                        <ButtonHome size={size} color={color}/>
                        //<Icon name="home-outline" size={size} color={color} />
                    )
                }} 
            />
            <Tab.Screen 
                name="Preces" 
                component={Preces}
                options={{
                    tabBarIcon: ({ size, color })=>(
                        <Icon name="church" size={size} color={color} />
                    )
                }} 
            />
            <Tab.Screen 
                name="Contato" 
                component={Contato} 
                options={{
                    tabBarIcon: ({ size, color })=>(
                        <Icon name="card-account-phone-outline" size={size} color={color} />
                    )
                }} 
            />
        </Tab.Navigator>
    );
}
