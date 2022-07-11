import React, { useState,useEffect } from 'react';
import { View, ScrollView, ActivityIndicator } from 'react-native';
import Header from '../../components/Header';
import styles from './styles';
import ListarAgenda from '../../components/ListarAgenda';
import api from '../../services/api';


export default function Agenda() {

 const [agenda2, setagenda2] = useState([]);
 const [load, setload] = useState(false);

  async function loadAgenda(){
    setload(true);
    await api.get('agenda/filter/all')
    .then(response =>{
      setagenda2(response.data);
      setload(false);
    });
  }
  useEffect(()=>{
    loadAgenda();
  }, [])
 return (
   <View style={styles.container}>
     <Header/>
     <ScrollView style={styles.content} contentContainerStyle={{alignItems:'center'}}>
     
     
       {
         load ?
         <ActivityIndicator color='#a05172' size={50}/>
         :
         agenda2.map(a =>(
          <ListarAgenda keyExtractor={a =>a._id.toString()} ide={a._id} image={a.ImagemGira} title={a.Titulo} when={a.when}/>  
         ))
       }
     </ScrollView>
   </View>
  
  );
}

