import React, { Component } from "react";
import "./styles/App.scss";
import { v4 as uuidv4 } from "uuid";
import AddPassport from "./components/AddPassport";
import Print from "./components/Print";
import ClearAll from "./components/ClearAll";
import PassportsToPrint from "./components/PassportsToPrint";

class App extends Component {
  state = {
    actualPassport: {
      id: "",
      plantName: "",
      plantVarieties: [],
      plantAmount: "",
      plantId: "",
    },
    passportsList: [],
    actualPlantVariety: { varietyName: "", varietyAmount: "" },
  };

  clearForm = () => {
    const plant = document.getElementById("plantName");
    plant.value = "";
    plant.focus();
    document.getElementById("plantName").value = "";
    document.getElementById("plantId").value = "";
    document.getElementById("plantAmount").value = "";
    document.getElementById("varietyName").value = "";
    document.getElementById("varietyAmount").value = "";
    this.setState({
      actualPassport: {
        id: "",
        plantName: "",
        plantVarieties: [],
        plantAmount: "",
        plantId: "",
      },
    });
  };

  handleChange = (e) => {
    const actualInput = e.target.id;

    this.setState({
      actualPassport: {
        ...this.state.actualPassport,
        [actualInput]:
          actualInput === "plantName"
            ? e.target.value
              ? e.target.value[0].toUpperCase() + e.target.value.slice(1)
              : ""
            : e.target.value,
      },
    });
  };
  handleChangeActualVariety = (e) => {
    const actualInput = e.target.id;
    this.setState({
      actualPlantVariety: {
        ...this.state.actualPlantVariety,
        [actualInput]: e.target.value,
      },
    });
  };
  handleAddVariety = (e) => {
    e.preventDefault();
    console.log(this.state.actualPlantVariety.varietyName);

    this.setState({
      actualPassport: {
        ...this.state.actualPassport,
        plantVarieties: [
          ...this.state.actualPassport.plantVarieties,
          this.state.actualPlantVariety,
        ],
      },
    });
    document.getElementById("varietyName").value = "";
    document.getElementById("varietyAmount").value = "";
    this.setState({
      actualPlantVariety: { varietyName: "", varietyAmount: "" },
    });
  };
  handleAddPlant = (e) => {
    e.preventDefault();
    this.setState((prevState) => {
      const actualPassport = { ...prevState.actualPassport, id: uuidv4() };
      const passportsList = [...prevState.passportsList, actualPassport];
      return { passportsList };
    });
    this.clearForm();
  };

  handleClearAll = () => {
    this.setState({
      passportsList: [],
    });
  };

  handlePrint = () => {
    window.print();
    return false;
  };

  handleDeletePassport = (id) => {
    this.setState((prevState) => {
      const passportsList = [...prevState.passportsList].filter(
        (passport) => passport.id !== id
      );
      return { passportsList };
    });
  };

  componentDidMount() {
    document.getElementById("plantName").focus();
  }

  render() {
    return (
      <main className="App">
        <div>
          <AddPassport
            handleChange={this.handleChange}
            handleAddPlant={this.handleAddPlant}
            handleAddVariety={this.handleAddVariety}
            handleChangeActualVariety={this.handleChangeActualVariety}
            actualPassport={this.state.actualPassport}
          />
          <br />
          <section className="passports">
            <Print handlePrint={this.handlePrint} />
            <ClearAll handleClearAll={this.handleClearAll} />
            <PassportsToPrint
              passportsList={this.state.passportsList}
              handleDeletePassport={this.handleDeletePassport}
            />
          </section>
        </div>
      </main>
    );
  }
}

export default App;
