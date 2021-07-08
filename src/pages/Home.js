  
import React, { useState } from 'react';
import { Text, View,StyleSheet,TouchableOpacity,TextInput } from 'react-native';
import {MyButtons} from '../components/MyButtons';

export function Home(){
    return(
        <View style = {styles.container}>
            <View style={styles.viewInput}>
                
                <TextInput style={styles.input} />
                
            </View>
            <View style = {styles.button_limpar}>
                <MyButtons texto="CE/C" cor="#ff7900"/>
            </View>
            <View style = {styles.viewButtons}>
                <View>
                    <MyButtons texto=" 7 " />
                    <MyButtons texto=" 4 " />
                    <MyButtons texto=" 1 " />
                    <MyButtons texto=" 0 " />
                </View>
                <View>
                    <MyButtons texto=" 8 " />
                    <MyButtons texto=" 5 " />
                    <MyButtons texto=" 2 " />
                    <MyButtons texto="00" />
                </View>
                <View>
                    <MyButtons texto=" 9 " />
                    <MyButtons texto=" 6 " />
                    <MyButtons texto=" 3 " />
                    <MyButtons texto="  .  " />
                </View>
                <View>
                
                    <MyButtons texto=" % " />
                    <MyButtons texto=" x " />
                    <MyButtons texto=" + " altura = "90" />
                </View>
                <View>
                    <MyButtons texto=" > " />
                    <MyButtons texto=" / " />
                    <MyButtons texto=" - " />
                    <MyButtons texto=" = " />
                </View>
            </View>
        </View>
        
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        margin:5,
        // backgroundColor: '#000',
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
    button_limpar:{
        flexDirection: "row",
        justifyContent:"flex-end",
        margin:5
    },
    viewButtons: {
        flexDirection: "row",
        justifyContent: "space-around"
    }
});