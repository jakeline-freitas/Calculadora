  
import React, { useState } from 'react';
import { Text, View,StyleSheet,TouchableOpacity,TextInput,FlatList } from 'react-native';
import {MyButtons} from '../components/MyButtons';


// variaveis global de estado
let propriedades = {
    valorCalculo: '',
    valorResultado: 0,
    operação: false
}

export function Home(){
    const [telaCalculo,setCalculo] = useState(propriedades.valorCalculo)
    const [telaResultado,setResultado] = useState(propriedades.valorResultado)

    const addDigitoTela = (digito) => {
        let ultimoValor = telaCalculo.substr(-1, 1)
        if((ultimoValor == '+' || ultimoValor == '-' || ultimoValor == '*' || ultimoValor == '/' || ultimoValor == '%') && (digito == '+' || digito == '-' || digito == '*' || digito == '/' || digito == '%')){
           return
        }else{
            propriedades.valorCalculo = propriedades.valorCalculo + digito
            setCalculo(propriedades.valorCalculo)
            setResultado(propriedades.valorResultado)
            propriedades.operação = false
        }
        
    }
    const limparTela = () => {
        propriedades = {
            valorCalculo: '',
            valorResultado: 0,
            operação: false
        }
        setCalculo(propriedades.valorCalculo)
        setResultado(propriedades.valorResultado)

    }

    const calculadora = (valor) =>{
        if(valor == 'BS'){
            propriedades.valorCalculo = telaCalculo.substring(0,(telaCalculo.length-1))
            setCalculo(propriedades.valorCalculo)
            return
        }
        try {
            propriedades.valorResultado = eval(propriedades.valorCalculo)
            propriedades.operação = true
            setResultado(propriedades.valorResultado)
        } catch {
            propriedades.valorResultado ='Erro'
            propriedades.operação = true
            setResultado(propriedades.valorResultado)
        }
        
    }

    return(
        <View style = {styles.container}>
            <View style={styles.display}>               
                <Text style={styles.visorOperacao}>{telaCalculo}</Text>
                <Text style={styles.visorResultado}>{telaResultado}</Text>
                
            </View>
            <View style = {styles.button_limpar}>
                <MyButtons texto="CE/C" click = {() => {limparTela()}}/>
            </View>
            <View style = {styles.viewButtons}>
                <View>
                    <MyButtons texto=" 7 " cor="#404146" click = {() => {addDigitoTela("7")}}/>
                    <MyButtons texto=" 4 " cor="#404146" click = {() => {addDigitoTela("4")}}/>
                    <MyButtons texto=" 1 " cor="#404146" click = {() => {addDigitoTela("1")}}/>
                    <MyButtons texto=" 0 " cor="#404146" click = {() => {addDigitoTela("0")}}/>
                </View>
                <View>
                    <MyButtons texto=" 8 " cor="#404146" click = {() => {addDigitoTela("8")}}/>
                    <MyButtons texto=" 5 " cor="#404146" click = {() => {addDigitoTela("5")}}/>
                    <MyButtons texto=" 2 " cor="#404146" click = {() => {addDigitoTela("2")}}/>
                    <MyButtons texto="00" cor="#404146"  click = {() => {addDigitoTela("00")}}/>
                </View>
                <View>
                    <MyButtons texto=" 9 " cor="#404146" click = {() => {addDigitoTela("9")}}/>
                    <MyButtons texto=" 6 " cor="#404146" click = {() => {addDigitoTela("6")}}/>
                    <MyButtons texto=" 3 " cor="#404146" click = {() => {addDigitoTela("3")}}/>
                    <MyButtons texto="  .  " cor="#404146" click = {() => {addDigitoTela(".")}}/>
                </View>
                <View>
                
                    <MyButtons texto=" % " cor="#404146"  click = {() => {addDigitoTela("%")}}/>
                    <MyButtons texto=" x " cor="#404146"  click = {() => {addDigitoTela("*")}}/>
                    <MyButtons texto=" + " cor="#404146" altura = "130" click = {() => {addDigitoTela("+")}}/>
                    {/* <MyButtons texto=" +  " cor="#404146" click = {() => {addDigitoTela("+")}}/> */}
                </View>
                <View>
                    <MyButtons texto=" < " cor="#404146" click = {() => {calculadora("BS")}}/>
                    <MyButtons texto=" / " cor="#404146" click = {() => {addDigitoTela("/")}}/>
                    <MyButtons texto=" - " cor="#404146" click = {() => {addDigitoTela("-")}}/>
                    <MyButtons texto=" = " cor="#404146" click = {() => {calculadora("=")}}/>
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