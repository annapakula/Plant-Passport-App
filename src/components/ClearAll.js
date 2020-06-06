import React from "react";

const ClearAll = ({ handleClearAll }) => {
  return (
    <button
      className="passports__button passports__button--clear no-print"
      id="button-clear"
      onClick={handleClearAll}
    >
      Wyczyść wszystko
    </button>
  );
};

export default ClearAll;
