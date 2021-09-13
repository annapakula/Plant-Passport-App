import React from "react";

const ClearAll = ({ handleClearAll }) => {
  return (
    <button
      className="button-warning no-print"
      id="button-clear"
      onClick={handleClearAll}
    >
      Wyczyść wszystko
    </button>
  );
};

export default ClearAll;
