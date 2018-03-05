import React, { Component } from 'react';
import './App.css';
import ProductList from './ProductList'



class App extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      items: [
        {id: 1, title: 'Home'},
        {id: 2, title: 'About'},
        {id: 3, title: 'Contact'},
      ]
    }
  }

  render() {
    return (
      <div className="App">
        <ul class="menu">
          {this.state.items.map((i) =>
            <li key = {i.id} id ={i.id} onClick = {(e) => this.selectMenu(i.id, e)}>
              <div>{i.title}</div>
            </li>
          )}
        </ul>
      </div>
    );
  }

  selectMenu(e) {
    for (var i=0;i<this.state.items.length;i++) {
      var el = document.getElementById(this.state.items[i].id);
      el.style.backgroundColor = 'white';
    }
    var el = document.getElementById(e);
    if (el.style.backgroundColor == 'blue')
      el.style.backgroundColor = 'white';
    else
      el.style.backgroundColor = 'blue';

  }

}

export default App;
