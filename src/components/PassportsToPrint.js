import React from "react";
import "../styles/PassportsToPrint.scss";
import DeletePassport from "./DeletePassport";
import Passport from "./Passport";

const PassportsToPrint = ({ plants, handleDeleteVariety, handleDeletePassport }) => {
  // const handleCancelEdit = (id) => {};
  // const handleConfirmEdit = () => {};
  // const handleEditPassport = () => {};
  // const varieties = passportsList.map(passport)

  return (
    <div className="PassportsToPrint__container">
    { plants.map((plant) => {
      return (
        <div key={plant.id} className="PassportsToPrint print">
          {plant.varieties.map((variety) => {
            return (
              <p key={`${Math.floor(Math.random(100) * 1000000)}-${plant.id}`} className="Passport__paragraph">
                {plant.name} {variety.name} &#160;{" "}
                {variety.amount} {variety.amount ? "szt." : ""}
                <button className="PassportsToPrint__button no-print" onClick={() => handleDeleteVariety(variety.id)}>X</button>
              </p>
            );
          })}
          <div className="Passport__box">
            <Passport plant={plant} />
            <DeletePassport
              handleDeletePassport={() => handleDeletePassport(plant.id)}
            />
          </div>

          {/* <button className="no-print" onClick={handleEditPassport(passport.id)}>
          Edytuj
        </button> */}
          {/* 
        <form
          className="edit-passport__form"
          id={"edit-" + passport.id}
          action=""
          style={{ display: "none" }}
        >
          <input
            className="edit-passport__input"
            type="text"
            placeholder="Roślina"
            value={passport.plantName}
          />
          <input
            className="edit-passport__input"
            type="number"
            min="0"
            placeholder="Ilość sztuk"
            value={passport.amount}
          />
          <input
            className="edit-passport__input"
            type="text"
            placeholder="Id"
            value={passport.plantId}
          />
          <button
            className="edit-passport__button"
            type="submit"
            onClick={handleConfirmEdit}
          >
            Zatwierdź
          </button>
          <button
            className="edit-passport__button"
            id={"cancel-edit-" + passport.id}
            type="submit"
            onClick={handleCancelEdit(passport.id)}
          >
            Anuluj
          </button>
        </form> */}
        </div>
      );
    })}
    </div>
  )
};

export default PassportsToPrint;
