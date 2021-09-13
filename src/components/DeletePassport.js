import React from "react";
import trashIcon from "../icons/delete.svg";

const DeletePassport = ({ handleDeletePassport }) => {
  return (
    <button
      className="DeletePassport__button button-warning no-print"
      onClick={handleDeletePassport}
    >
      <img className="DeletePassport__icon" src={ trashIcon } alt="Usuń paszport" />
    </button>
  );
};

export default DeletePassport;
