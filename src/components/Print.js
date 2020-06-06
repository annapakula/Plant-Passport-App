import React from "react";

const Print = ({ handlePrint }) => {
  return (
    <button
      className="passports__button passports__button--print no-print"
      id="button-print"
      onClick={handlePrint}
    >
      Drukuj
    </button>
  );
};

export default Print;
