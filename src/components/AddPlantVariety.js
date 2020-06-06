import React from "react";

const AddPlantVariety = ({ handleChangeActualVariety, handleAddVariety }) => {
  return (
    <div>
      <input
        className="add-passport__input"
        id="varietyName"
        type="text"
        placeholder="Odmiana"
        onChange={handleChangeActualVariety}
      />
      <input
        className="add-passport__input"
        id="varietyAmount"
        type="number"
        min="1"
        placeholder="Ilość sztuk"
        onChange={handleChangeActualVariety}
      />
      <button onClick={handleAddVariety}>Dodaj odmianę</button>
    </div>
  );
};

export default AddPlantVariety;
