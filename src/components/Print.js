import React from "react";

const Print = ({ handlePrint }) => {
  return (
    <button
      className="button no-print"
      id="button-print"
      onClick={handlePrint}
    >
      Drukuj
    </button>
  );
};

export default Print;
