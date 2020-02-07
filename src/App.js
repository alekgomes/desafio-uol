import React, { Component } from 'react';
import Header from './components/Header'
import PainelClientes from './components/PainelClientes'

class App extends Component {

  render(){
    return (
      <div>
        <Header />
        <PainelClientes />
      </div>
    );
  }
}

export default App;
