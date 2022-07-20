import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./styles/App.scss";
import AddPassport from "./components/AddPassport";
import PassportsToPrint from "./components/PassportsToPrint";
import Print from "./components/Print";
import ClearAll from "./components/ClearAll";

const App = () => {
    const [plants, setPlants] = useState([]);
    const year = new Date().getFullYear();

    const addPlant = (id, name, variety, amount) => {
        const newPlant = plants.find(plant => plant.name === name);

        if (newPlant) {
            newPlant.varieties.push({ id: uuidv4(), name: variety, amount });

            const updatedPlants = plants.map(plant => {
                if (plant.name === name) plant = newPlant;
                return plant;
            });

            setPlants(updatedPlants);
        } else {
            setPlants([...plants, { id: uuidv4(), plantId: id, name, varieties: [{ id: uuidv4(), name: variety, amount }] }]);
        }

    };
    const handleDeleteVariety = (idToDelete) => {
        const updatedPlants = plants.filter(plant => {
            plant.varieties = plant.varieties.filter(variety => variety.id !== idToDelete);
            return plant.varieties.length > 0;
        });
        setPlants(updatedPlants);
    }
    const handleDeletePassport = (idToDelete) => {
        const updatedPlants = plants.filter(plant => plant.id !== idToDelete);
        setPlants(updatedPlants);
    }
    const handleClearAll = () => {
		setPlants([]);
	};
	const handlePrint = () => {
		window.print();
		return false;
	};

    return (
        <main className="App">
            <div className="App__box">
                <AddPassport
                    addPlant={addPlant}
                    year={year}
                />
                <br />
                <section className="App__passports">
                    <div className="App__buttons">
                        <Print handlePrint={handlePrint} />
    					<ClearAll handleClearAll={handleClearAll} />
                    </div>
                    <hr className="no-print" />
                    <PassportsToPrint
                        plants={plants}
                        handleDeleteVariety={handleDeleteVariety}
                        handleDeletePassport={handleDeletePassport} />
                </section>
            </div>
            <footer className="App__footer no-print">
                Copyright © {year} Anna Pakuła
            </footer>
        </main>
    );
}

export default App;
