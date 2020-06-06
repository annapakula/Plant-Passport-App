import React from "react";
import flagOfEurope from "../images/flag-of-europe.svg";
import "../styles/PassportsToPrint.scss";
import DeletePassport from "./DeletePassport";

const PassportsToPrint = ({ passportsList, handleDeletePassport }) => {
  // const handleCancelEdit = (id) => {};
  // const handleConfirmEdit = () => {};
  // const handleEditPassport = () => {};

  return passportsList.map((passport) => {
    return (
      <div key={passport.id} className="PassportsToPrint">
        <p className="passport__paragraph">
          {passport.plantName} &#160; {passport.amount}szt.
        </p>
        <div className="passport__box">
          <div className="passport">
            <table className="table">
              <thead className="table__head">
                <tr className="table__head-row">
                  <th className="table__head-cell" colSpan="4">
                    <img
                      src={flagOfEurope}
                      alt="Flag of Europe"
                      className="table__flag"
                    />
                    <h3 className="table__header">
                      Paszport Roślin &#92; Plant Passport
                    </h3>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="table__cell table__cell--letter">A</td>
                  <td className="table__cell table__cell--data">
                    {passport.plantName}
                  </td>
                  <td className="table__cell table__cell--letter">B</td>
                  <td className="table__cell table__cell--data">
                    PL-18/62/5804
                  </td>
                </tr>
                <tr>
                  <td className="table__cell table__cell--letter">C</td>
                  <td className="table__cell table__cell--data">
                    {passport.plantId}
                  </td>
                  <td className="table__cell table__cell--letter">D</td>
                  <td className="table__cell table__cell--data">PL</td>
                </tr>
              </tbody>
            </table>
          </div>
          <DeletePassport
            handleDeletePassport={() => handleDeletePassport(passport.id)}
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
  });
};

export default PassportsToPrint;
