  
import React, { useState } from 'react';
import { Text, View,StyleSheet,TouchableOpacity,TextInput,FlatList } from 'react-native';
import {MyButtons} from '../components/MyButtons';

export function Home(){
    const [calculo,setCalculo] = useState(0)
    const [resultado,setResultado] = useState(0)

    const buttons = [7, 4, 1, 0, 0, 5, 2, '00', 9, 6, 3, '.', '%', 'x', '+', '>', '/', '-','=']

    function calcular(){
        setResultado(eval(calculo))
    }
    return(
        <View style = {styles.container}>
            <View style={styles.display}>               
                <Text style={styles.visorOperacao}>0</Text>
                <Text style={styles.visorResultado}>0</Text>
            </View>
            <View style = {styles.button_limpar}>
                <MyButtons texto="CE/C" />
            </View>
            <View style = {styles.viewButtons}>
                <View>
                    <MyButtons texto=" 7 " cor="#404146"/>
                    <MyButtons texto=" 4 " cor="#404146"/>
                    <MyButtons texto=" 1 " cor="#404146"/>
                    <MyButtons texto=" 0 " cor="#404146"/>
                </View>
                <View>
                    <MyButtons texto=" 8 " cor="#404146"/>
                    <MyButtons texto=" 5 " cor="#404146"/>
                    <MyButtons texto=" 2 " cor="#404146"/>
                    <MyButtons texto="00" cor="#404146"/>
                </View>
                <View>
                    <MyButtons texto=" 9 " cor="#404146"/>
                    <MyButtons texto=" 6 " cor="#404146"/>
                    <MyButtons texto=" 3 " cor="#404146"/>
                    <MyButtons texto="  .  " cor="#404146"/>
                </View>
                <View>
                
                    <MyButtons texto=" % " cor="#404146"/>
                    <MyButtons texto=" x " cor="#404146"/>
                    <MyButtons texto=" + " cor="#404146"/>
                    <MyButtons texto="  " cor="#404146"/>
                </View>
                <View>
                    <MyButtons texto=" > " cor="#404146"/>
                    <MyButtons texto=" / " cor="#404146"/>
                    <MyButtons texto=" - " cor="#404146"/>
                    <MyButtons texto=" = " cor="#404146"/>
                </View>
            </View>
                       
        </View>
        
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:"flex-start",
        // alignItems:'center',
        margin:5,
        backgroundColor: '#000',
        borderRadius:5
    },
    button_limpar:{
        alignItems:'flex-end',
        marginTop:5,
        marginRight:10
    },
    display:{
        flex:0.3,
        padding: 20,
        margin:5,
        justifyContent:'center',
        alignItems: 'flex-end',
        width:"95%",
        backgroundColor:"#d4dfbf",
        borderRadius:30
    },
    visorOperacao: {
        fontSize:25,
        color:"#444"
    
    },
    visorResultado:{
        fontSize:50,
        color:"#444"
    },
    viewButtons:{
        flex:1,
        flexDirection:'column',
        flexWrap:'wrap',
        
    }
   
});