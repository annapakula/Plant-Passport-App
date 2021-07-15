import React from "react";
import "../styles/AddPassport.scss";
import AddPlantVariety from "./AddPlantVariety";

// class AddPassport extends
const AddPassport = ({
  handleChange,
  handleAddPlant,
  handleAddVariety,
  handleChangeActualVariety,
  actualPassport,
}) => {
  return (
    <section className="add-passport no-print">
      <h2 className="add-passport__header">Dodaj paszport</h2>
      <small>Dane rośliny:</small>
      <form className="add-passport__form" action="">
        <input
          className="add-passport__input"
          id="plantName"
          type="text"
          placeholder="Roślina"
          onChange={handleChange}
        />
        <input
          className="add-passport__input"
          id="plantId"
          type="text"
          placeholder="Id"
          value="ID A01/2021"
          onChange={handleChange}
        />
        <input
          className="add-passport__input"
          id="plantAmount"
          type="number"
          min="1"
          placeholder="Ilość sztuk"
          onChange={handleChange}
        />
        <br />

        <small>Odmiana rośliny (opcjonalnie):</small>
        <AddPlantVariety
          handleChangeActualVariety={handleChangeActualVariety}
          handleAddVariety={handleAddVariety}
        />
        <br />
        {actualPassport.plantVarieties ? (
          actualPassport.plantVarieties.map((variety) => {
            return (
              <p>
                {actualPassport.plantName} {variety.varietyName}{" "}
                {variety.varietyAmount}
              </p>
            );
          })
        ) : (
          <p>
            {actualPassport.plantName} {actualPassport.plantAmount}
          </p>
        )}
        <button
          className="button"
          id="button-add"
          type="submit"
          onClick={handleAddPlant}
        >
          Dodaj paszport
        </button>
      </form>
    </section>
  );
};

export default AddPassport;
