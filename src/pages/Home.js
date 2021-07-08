  
import React, { useState } from 'react';
import { Text, View,StyleSheet,TouchableOpacity,TextInput } from 'react-native';


export function Home(){
    return(
        <View style = {styles.container}>
            <View style={styles.viewInput}>
                
                <TextInput style={styles.input} />
                
            </View>
        </View>
        
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        margin:5,
        backgroundColor: '#000',
        borderRadius:5
    },
    viewInput:{
        margin: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    input: {
        backgroundColor: '#d4dfbf',
        height: 60,
        margin: 10,
        flex: 1,
        color: '#000000',
        fontSize: 16,
        padding: Platform.OS === 'ios' ? 10 : 5,
        borderRadius: 7
    },
});