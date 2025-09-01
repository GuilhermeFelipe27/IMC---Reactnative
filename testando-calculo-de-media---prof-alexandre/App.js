import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet, Button} from 'react-native';

export default () => {

const [peso, setPeso]           = useState(''); // o estado dessas variáveis começará vazio
const [altura, setAltura]       = useState('');
const [resultado, setResultado] = useState('');

const calcularIMC = () => {
  const alturaMetros = parseFloat(altura);
  const pesoKg       = parseFloat(peso);

  if (!alturaMetros || !pesoKg){
    setResultado('Não esueça de preencher nenhum campo!');
  }

    const imc = pesoKg / (alturaMetros * alturaMetros);

    let  classificacao = '';

    if (imc < 18.5) {
      classificacao('Abaixo do peso normal!');
    } else if (imc >= 18.5 && imc <= 24.9){
      classificacao = 'Peso normal!';
    } else if (imc >= 25 && imc <=29.9){
      classificacao = 'Excesso de peso!';
    } else if (imc >=30 && imc <= 34.9){
      classificacao = 'Obesidade Grau I!';
    } else if (imc >= 35 && imc <= 39.9){
      classificacao = 'Obesidade Grau II!';
    } else {
      classificacao = 'Obesidade Grau III!';
    } 
        
    setResultado(` O IMC é ${imc.toFixed(2)} - ${classificacao}`);
 }


  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        Cálculo de Média
      </Text>
 
      <TextInput
      style={styles.input}
      keyboardType='numeric'
      placeholder='Digite seu peso'
      onChangeText={setPeso} // forma de atribuir valor às 'const' criadas; primeiro passa ao parâmetro com início 'set', e depois para o 'peso'
      value={peso}//trava o valor e utiliza-o
      />

      <TextInput
      style={styles.input}
      keyboardType='numeric'
      placeholder='Digite sua altura' 
      onChangeText={setAltura} // mesmo caso do input de peso
      value={altura}
      />

      <Button title='Calcular o IMC' onPress={calcularIMC}/>

      <Text style={styles.result}>{resultado}</Text>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  titulo: {
    textAlign: 'center',
    fontSize: 25,
  },
  input: {
    backgroundColor: 'white',
    width: "80%",
    marginTop: 10,
    borderRadius: 10,
    paddingHorizontal: 20,
    marginBottom: 20
  },
  result: {
    marginTop: 15,
    fontSize: 15,
    fontWeight: 'bold'
  }
})
 