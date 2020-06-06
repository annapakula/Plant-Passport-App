import React, { Component } from "react";
import "./styles/App.scss";
import { v4 as uuidv4 } from 'uuid';
import AddPassport from "./components/AddPassport";
import Print from "./components/Print";
import ClearAll from "./components/ClearAll";
import PassportsToPrint from "./components/PassportsToPrint";

class App extends Component {
  state = {
    actualPassport: {id: '', plantName: '', amount: 0, plantId: ''},
    passportsList: [],

  };

  clearForm = () => {
    const plant = document.getElementById('plantName');
    plant.value = '';
    plant.focus();
    document.getElementById('amount').value = '';
    document.getElementById('plantId').value = '';
    this.setState({actualPassport: {id: '', plantName: '', amount: 0, plantId: ''}});
  }

  handleChange = (e) => {
    const actualInput = e.target.id;
    this.setState({
      actualPassport: {
        ...this.state.actualPassport, 
        [actualInput]: actualInput === 'plantName' ?
          e.target.value ? 
            (e.target.value)[0].toUpperCase() + (e.target.value).slice(1)
            : ''
          : e.target.value
      }
    })
  }
  handleAddPlant = (e) => {
    e.preventDefault();
    this.setState(prevState => {
      const actualPassport = {...prevState.actualPassport, id: uuidv4()};
      const passportsList = [...prevState.passportsList, actualPassport]
      return {passportsList}
    })
    this.clearForm();
  }
  
  handleClearAll = () => {
    this.setState({
      passportsList: []
    })
  }

  handlePrint = () => {
    window.print();
    return false;
  }

  handleDeletePassport = (id) => {
    this.setState(prevState => {
      const passportsList = [...prevState.passportsList].filter(passport => passport.id !== id)
      return {passportsList};
    })
  };

  componentDidMount() {
    document.getElementById('plantName').focus();
  }
  
  render() {
    return (
      <main className="App">
        <div>
          <AddPassport handleChange={this.handleChange} handleAddPlant={this.handleAddPlant} />
          <br />
          <section className="passports">
            <Print handlePrint={this.handlePrint}/>
            <ClearAll handleClearAll={this.handleClearAll}/>
            <PassportsToPrint passportsList={this.state.passportsList} handleDeletePassport={this.handleDeletePassport}/>
          </section>
        </div>
      </main>
    );
  }
}

export default App;
