import React from 'react';

import {
    View,
    Text,
    TouchableOpacity,
    Button,
    StyleSheet,
} from 'react-native';

export function MyButtons(props){
    return(
        
        <View height = {parseInt(props.altura) ? parseInt(props.altura) : 40} style={styles.viewButton}>
            <Button 
                title = {props.texto}
                color = {props.cor ? props.cor : "#404146"} 
                style={styles.button}/>
               
        </View>
           
               
        
    )
}
const styles = StyleSheet.create({
    viewButton:{
        flexDirection:"row",
        justifyContent:"center",        
        margin: 5
        
    },
    button:{
        justifyContent:"center", 
        alignItems:"center",
        padding:10
        // backgroundColor: '#ff7900',
    }
});