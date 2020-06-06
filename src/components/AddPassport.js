import React from "react";
import '../styles/AddPassport.scss';

// class AddPassport extends
const AddPassport = ({handleChange, handleAddPlant}) => {
  return (
    <section className="add-passport no-print">
      <h2 className="add-passport__header">Dodaj paszport</h2>
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
          id="amount"
          type="number"
          min="1"
          placeholder="Ilość sztuk"
          onChange={handleChange}
        />
        <input
          className="add-passport__input"
          id="plantId"
          type="text"
          placeholder="Id"
          onChange={handleChange}
        />
        <button className="add-passport__button" id="button-add" type="submit" onClick={handleAddPlant}>
          +
        </button>
      </form>
    </section>
  );
};

export default AddPassport;
