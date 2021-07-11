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
        <TouchableOpacity style={[styles.button, {backgroundColor: props.cor ? props.cor : "#ff7900"}]}>
            <Text style={styles.text}>{props.texto}</Text>
        </TouchableOpacity>     
    )
}
const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        padding: 20,
        margin:5,
        borderRadius:10,
        
    },
    text:{
        color: '#FFFFFF',
        fontSize:15
    }
});