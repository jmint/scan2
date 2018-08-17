import React, { Component } from 'react';
import QrReader from 'react-qr-reader'
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import logo from './logo.svg'

class Scan extends Component {
  constructor (props) {
    super(props);
    this.state = {
      delay: 300,
      result: 'Aún no se detecta un código QR',
      swresult: false,
    }
    this.handleScan = this.handleScan.bind(this)
  }

  handleScan(data) {
    if (data){
      this.setState({
        result : data,
        swresult: true,
      })
    }
  }

  handleError(err) {
    console.error(err)
  }

  render() {
    return(
      <figure className="figure figure-scan">
        <QrReader 
          delay={this.state.delay}
          onError = {this.handleError}
          onScan={this.handleScan}
        />
        {this.state.swresult === true ? 
        <h3><a href ={this.state.result}>{this.state.result}</a></h3> : 
        <h3>{this.state.result}</h3>}
        
      </figure>
    )
  }
  
}

class App extends Component {

  render() {
    return (
      <div className="App">
        <Presentational />

      </div>
    );
  }
}

const Presentational = () => {
  return (
    <div>
      <header className="App-header">
      <h3 className="App-tittle">Escaner</h3>
      </header>
      <Scan />
    </div>
    
  )
}

export default App;
