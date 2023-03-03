import React from "react";
import "../styles/PassportsToPrint.scss";
import DeletePassport from "./DeletePassport";
import Passport from "./Passport";

const PassportsToPrint = ({ plants, handleDeleteVariety, handleDeletePassport }) => {
  return (
    <div className="PassportsToPrint__container">
      { plants.map((plant) => {
        return plant.varieties.map((variety) => {
          let passportId = variety.id
          return (
            <div key={passportId} className="PassportsToPrint print">
              <p className="Passport__paragraph">
                {plant.name} {variety.name} &#160;{" "}
                {variety.amount} {variety.amount ? "szt." : ""}
                <button className="PassportsToPrint__button no-print" onClick={() => handleDeleteVariety(variety.id)}>X</button>
              </p>
              <div className="Passport__box">
                <Passport plant={plant} />
                <DeletePassport
                  handleDeletePassport={() => handleDeletePassport(passportId)}
                  />
              </div>
            </div>
          );
        })
    })}
    </div>
  )
};

export default PassportsToPrint;
