
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    card:{
        
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        width: '90%',
        marginVertical: 10,
        height: 90,
        backgroundColor:"white",
        borderRadius:15,
        padding:10,
        elevation:10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5, 
        
    },
    cardLeft:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    cardTitle:{
        marginTop: 25,
        marginLeft: -25,
        fontWeight: 'bold',
        fontSize: 16
    },
    cardRight:{
        alignItems: 'flex-end',
        justifyContent: 'space-between'
    },
    cardDate:{
        fontSize: 16,
        fontWeight:'bold'
    },
    logoagenda:{
        marginTop:7,
        width: 61,
        height: 61
    }
    
});

export default styles;