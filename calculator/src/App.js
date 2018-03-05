import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      first: 0,
      second: 0,
      operator: '+',
      result: ''
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Calculator</h1>
        </header>
        <div className="App-intro">
          <input autocomplete="off" autocorrect="off" autocapitalize="off" type="text" id="input" value={this.state.result} placeholder="" />
          <table>
            <tr class="basic">
              <th>
                <button id="clear" onClick={(e) => this.buttonIsClicked('clear', e)}>Clear</button>
              </th>
              <th><button id="bs" onClick={(e) => this.buttonIsClicked('bs', e)}>BS</button></th>
            </tr>
            <tr class="arithmetic">
              <th><button id="number" onClick={(e) => this.buttonIsClicked('7', e)}>7</button></th>
              <th><button id="number" onClick={(e) => this.buttonIsClicked('8', e)}>8</button></th>
              <th><button id="number" onClick={(e) => this.buttonIsClicked('9', e)}>9</button></th>
              <th><button id="operator" onClick={(e) => this.buttonIsClicked('+', e)}>+</button></th>
            </tr>
            <tr class="arithmetic">
              <th><button id="number" onClick={(e) => this.buttonIsClicked('4', e)}>4</button></th>
              <th><button id="number" onClick={(e) => this.buttonIsClicked('5', e)}>5</button></th>
              <th><button id="number" onClick={(e) => this.buttonIsClicked('6', e)}>6</button></th>
              <th><button id="operator" onClick={(e) => this.buttonIsClicked('-', e)}>-</button></th>
            </tr>
            <tr class="arithmetic">
              <th><button id="number" onClick={(e) => this.buttonIsClicked('1', e)}>1</button></th>
              <th><button id="number" onClick={(e) => this.buttonIsClicked('2', e)}>2</button></th>
              <th><button id="number" onClick={(e) => this.buttonIsClicked('3', e)}>3</button></th>
              <th><button id="operator" onClick={(e) => this.buttonIsClicked('x', e)}>x</button></th>
            </tr>
            <tr class="arithmetic">
              <th><button id="number" onClick={(e) => this.buttonIsClicked('0', e)}>0</button></th>
              <th><button id="number" onClick={(e) => this.buttonIsClicked('.', e)}>.</button></th>
              <th><button id="result" onClick={(e) => this.buttonIsClicked('=', e)}>=</button></th>
              <th><button id="operator" onClick={(e) => this.buttonIsClicked('/', e)}>/</button></th>
            </tr>
          </table>
        </div>
      </div>
    );
  }

  buttonIsClicked(e) {
    var element = document.getElementById(e);
    // var input = document.getElementById('input');
    var result = this.state.result;
    var num = parseInt(result);
    var first = this.state.first, second = this.state.second;
    switch (e) {
      case 'clear':
        this.setState({
          first: 0,
          second: 0,
          operator: '+',
          result: ''
        });
        break;
      case 'bs':
        result = result.substring(0, result.length - 1)
        this.setState((prevState, props) => ({
          result: result
        }));
        break;
      case '+':
        this.setState({
          first: num,
          operator: '+',
          result: ''
        });
        break;
      case '-':
        this.setState({
          first: num,
          operator: '-',
          result: ''
        });
        break;
      case 'x':
        this.setState({
          first: num,
          operator: 'x',
          result: ''
        });
        break;
      case '/':
        this.setState({
          first: num,
          operator: '/',
          result: ''
        });
        break;
      case '=': {
        second = num;
        var calculation = 0;
        switch(this.state.operator) {
          case '+':
            calculation = first + second;
            break;
          case '-':
            calculation = first - second;
            break;
          case 'x':
            calculation = first * second;
            break;
          case '/':
            calculation = first / second;
            break;
          default:
            break;
        }
        this.setState((prevState, props) => ({
          result: calculation.toString()
        }));
      }
        break;
      default:
        if (e == '0') {
          if (num != 0 && !isNaN(num)) {
            result += e;
            this.setState((prevState, props) => ({
              result: prevState.result + e
            }));        
          }
        }
        else {
          result += e;
          this.setState((prevState, props) => ({
            result: prevState.result + e
          }));
        }
        break;
    }
  }

}

export default App;
