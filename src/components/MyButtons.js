import React from 'react';

import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';

export function MyButtons(props){
    var texto = props.texto;
    return(            
        <TouchableOpacity style={[styles.button, {backgroundColor: props.cor ? props.cor : "#ff7900"},{height: parseInt(props.altura) ? parseInt(props.altura) : 60}]} onPress={props.click}>
            <Text style={styles.text}>{props.texto}</Text>
        </TouchableOpacity>     
    )
}
const styles = StyleSheet.create({
    button: {
        justifyContent:'center',
        alignItems: 'center',
        padding: 5,
        width:60,
        // height:60,
        margin:5,
        borderRadius:10,
        
    },
    text:{
        color: '#FFFFFF',
        fontSize:15
    }
});