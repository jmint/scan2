import React, { Component } from 'react';
import QrReader from 'react-qr-reader'
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import logo from './hdsac.svg'

class Scan extends Component {
  constructor (props) {
    super(props);
    this.state = {
      delay: 300,
      result: 'Consulta de Certificado',
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
        window.location.href = this.state.result :
        <div className="mensaje-c"><h3 className="App-result">{this.state.result}</h3></div>}
        
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
        <div className="Logo-c">
          <img src={logo} alt="logo" className="App-logo"></img>
        </div>
      </header>
      <Scan />
    </div>
    
  )
}

export default App;
