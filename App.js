import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      resultText: "",
      calculationText: ""
    };
    this.operations = ['DEL', '+', '-', '*', '/'];
  }
  calculateResult() {
    const text = this.state.resultText
    this.setState({
      resultText: eval(text).toString(),
      calculationText: ""
    })
  }

  validate() {
    const text = this.state.resultText
    switch (text.slice(-1)) {
      case '+':
      case '-':
      case '*':
      case '/':
        return false
    }
    return true
  }

  buttonPressed(text) {
    let dtxt = ''
    if (text == '=') {
      return this.validate() && this.calculateResult()
    }
    const txt = this.state.resultText.toString()
    
    dtxt = eval((txt + text).toString())
    
    this.setState({
      resultText: txt + text,
      calculationText: dtxt
    })
  }

  operate(operation) {
    switch (operation) {
      case 'DEL':
        let text = this.state.resultText.split('')
        text.pop()
        this.setState({
          resultText: text.join(''),
          calculationText: eval(text.join('')).toString()
        })
        break
      case 'C':
        this.setState({
          resultText: '',
          calculationText: ''
        })
        break
      case '+':
      case '-':
      case '*':
      case '/':
        const lastChar = this.state.resultText.split('').pop()

        if (this.operations.indexOf(lastChar) > 0) return
        if (this.state.resultText == "") {
          return
        }
        this.setState({
          resultText: this.state.resultText + operation
        })
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.result}>
          <Text style={styles.resultText}>{this.state.resultText}</Text>
        </View>
        <View style={styles.calculation}>
          <Text style={styles.calculationText}>{this.state.calculationText}</Text>
        </View>

        <View style={styles.buttons}>
          <View style={styles.numbers}>
            <View style={styles.row}>
              <TouchableOpacity onPress={() => this.buttonPressed(1)} style={styles.btn}>
                <Text style={styles.btntext}> 1 </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.buttonPressed(2)} style={styles.btn}>
                <Text style={styles.btntext}> 2 </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.buttonPressed(3)} style={styles.btn}>
                <Text style={styles.btntext}> 3 </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.row}>
              <TouchableOpacity onPress={() => this.buttonPressed(4)} style={styles.btn}>
                <Text style={styles.btntext}> 4 </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.buttonPressed(5)} style={styles.btn}>
                <Text style={styles.btntext}> 5 </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.buttonPressed(6)} style={styles.btn}>
                <Text style={styles.btntext}> 6 </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.row}>
              <TouchableOpacity onPress={() => this.buttonPressed(7)} style={styles.btn}>
                <Text style={styles.btntext}> 7 </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.buttonPressed(8)} style={styles.btn}>
                <Text style={styles.btntext}> 8 </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.buttonPressed(9)} style={styles.btn}>
                <Text style={styles.btntext}> 9 </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.row}>
              <TouchableOpacity onPress={() => this.buttonPressed('.')} style={styles.btn}>
                <Text style={styles.btntext}> . </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.buttonPressed(0)} style={styles.btn}>
                <Text style={styles.btntext}> 0 </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.buttonPressed('=')} style={styles.btn}>
                <Text style={styles.btntext}> = </Text>
              </TouchableOpacity>
            </View>

          </View>
          <View style={styles.operations}>
            <TouchableOpacity style={styles.btn} onPress={() => this.operate('C')}>
              <Text style={[styles.btntext]}> C </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => this.operate('DEL')}>
              <Text style={[styles.btntext]}> DEL </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => this.operate('+')}>
              <Text style={[styles.btntext]}> + </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => this.operate("-")}>
              <Text style={[styles.btntext]}> - </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => this.operate("*")}>
              <Text style={[styles.btntext]}> X </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => this.operate("/")}>
              <Text style={[styles.btntext]}> / </Text>
            </TouchableOpacity>
          </View>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  row: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  btntext: {
    fontSize: 30,
    color: '#a4a694',
  },
  white: {
    color: 'white'
  },
  btn: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  calculationText: {
    fontSize: 34,
    color: 'white',
    marginRight: '20px'
  },
  resultText: {
    fontSize: 40,
    color: 'white',
    marginRight: '20px'
  },
  result: {
    flex: 2,
    backgroundColor: '#76D3DE',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  calculation: {
    flex: 1,
    backgroundColor: '#B0F8FF',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  buttons: {
    flex: 7,
    flexDirection: 'row'
  },
  numbers: {
    flex: 3,
    backgroundColor: '#FEF9F0',
  },
  operations: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'stretch',
    backgroundColor: '#e8e3da'
  }
});
