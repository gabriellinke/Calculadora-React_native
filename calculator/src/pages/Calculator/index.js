import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';    // Importa ícone do MaterialIcons
import styles from './styles';  // Importa os estilos

const App: () => React$Node = () => {

  const [resultText, setResultText] = useState(''); // State que vai armazenar a string de números e operações digitadas pelo usuário
  const [calculationText, setCalculationText] = useState(''); // State que armazena o resultado das operações

  MaterialIcons.loadFont(); // Carrega o MaterialIcons

  // Função executa ao pressionar algum botão. Se for o botão de '=' realiza os cálculos. Se não, concatena o botão pressionado com a string de input atual.
  function buttonPressed(text)
  {
    if(text == '=')
      return validate() && calculateResult();

    setResultText(resultText + text)
  }

  // Validação das entradas
  function validate()
  {
    // Separar os números que vão realizar operações e ver se tem mais de um ponto por vetor ou se algum vetor é NaN
      const text = resultText;
      let regex = /[\*\/\-\+]/;
      let stringArray = text.split(regex);
      for(string of stringArray)
      {
        if(isNaN(string)) // Verifica se os valores são numéricos
          return false
        else if(string.indexOf('.') !== string.lastIndexOf('.'))  // Verifica se a expressão tem mais de 1 ponto
          return false;
      }

      switch(text.slice(-1))
      {
        case '+':
        case '-':
        case '*':
        case '/':
          return false;
      }
      return true;
  }

  // Função que vai calcular o resultado quando for pressionado o '='
  function calculateResult()
  {
    setCalculationText(eval(resultText))
  }

  // Verifica qual operação precisa ser realizada
  function operate(operation)
  {
    switch(operation)
    {
      case 'DEL':
        setResultText(resultText.substring(0, resultText.length - 1));
        break;
      case '+':
      case '-':
      case '*':
      case '/':
        const lastChar = resultText.split('').pop();
        if(operations.indexOf(lastChar) > 0) return;
        if(resultText == '') return;
        setResultText(resultText + operation);
    }
  }

  // Vetor que armazena os valores dos botões numéricos
  let rows = [];
  // Faz os botões com os números de 1 a 9
  for(let i=2; i >= 0; i--)
  {
    let row = [];
    for(let j=0; j < 3; j++)
      row.push(<TouchableOpacity onPress={() => buttonPressed((i*3)+j+1)} style={styles.btn} key={(i*3)+j+1}><Text style={styles.btnText}>{(i*3)+j+1}</Text></TouchableOpacity>);

    rows.push(<View key={i} style={styles.row}>{row}</View>)
  }

  // Faz a última linha com o 0 e os símbolos
  let lastRow = [0 , ".", '='];
  let row = [];
  for(let j=0; j < 3; j++)
    row.push(<TouchableOpacity onPress={() => buttonPressed(lastRow[j])} style={styles.btn} key={j}><Text style={styles.btnText}>{lastRow[j]}</Text></TouchableOpacity>);

  rows.push(<View key={row.lastIndex+1} style={styles.row}>{row}</View>);

  // Vetor que armazena os valores dos botões de operações
  let ops = [];
  let operations = ['DEL', '/', '*', '-', '+'];
  for(let j=0; j < 5; j++)
    ops.push(<TouchableOpacity onPress={() => operate(operations[j])} style={styles.btn} key={j}><Text style={styles.btnText, styles.blue}>{operations[j]}</Text></TouchableOpacity>);

  return (
    <View style={styles.container}>
      <View style={styles.result}>
        <Text style={styles.resultText}>{resultText}</Text>
      </View>
      <View style={styles.calculation}>
        <Text style={styles.calculationText}>{calculationText}</Text>
      </View>
      <View style={styles.buttons}>
        <View style={styles.numbers}>{rows}</View>
        <View style={styles.operations}>{ops}</View>
        <View style={styles.more}><Text><MaterialIcons name='keyboard-arrow-left' size={25} color={'#f1f3f4'}/></Text></View>
      </View>
    </View>
  );
};

export default App;