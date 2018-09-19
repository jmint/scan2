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
    if (data != null){
      this.setState({
        result : "http://" + data,
        swresult: true,
      })
      alert(this.state.result);
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
        window.location.replace(this.state.result) :
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
          <a onClick={() => window.location.href = "http://www.cubicacioneshd.com.pe"} ><img src={logo} alt="logo" className="App-logo"></img></a>
        </div>
      </header>
      <Scan />
    </div>
    
  )
}

export default App;
