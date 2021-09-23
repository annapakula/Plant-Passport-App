import React from 'react';
import flagOfEurope from "../images/flag-of-europe.svg";

const Passport = ({ plant }) => {
    return (
        <div className="Passport">
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
                      Paszport Roślin
                      <br />
                      Plant Passport
                    </h3>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="table__cell table__cell--letter">A</td>
                  <td className="table__cell table__cell--data">
                    {plant.name}
                  </td>
                </tr>
                <tr>
                  <td className="table__cell table__cell--letter">B</td>
                  <td className="table__cell table__cell--data">
                    PL-18/62/5804
                  </td>
                </tr>
                <tr>
                  <td className="table__cell table__cell--letter">C</td>
                  <td className="table__cell table__cell--data">
                    {plant.plantId}
                  </td>
                </tr>
                <tr>
                  <td className="table__cell table__cell--letter">D</td>
                  <td className="table__cell table__cell--data">PL</td>
                </tr>
              </tbody>
            </table>
          </div>
    )
}

export default Passport;
