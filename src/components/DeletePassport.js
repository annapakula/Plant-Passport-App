import React from "react";

const DeletePassport = ({ handleDeletePassport }) => {
  return (
    <button
      className="passport__delete-button no-print"
      onClick={handleDeletePassport}
    ></button>
  );
};

export default DeletePassport;
