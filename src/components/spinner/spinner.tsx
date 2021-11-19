import React from "react";
import { PulseLoader } from "react-spinners";
import styledSpinner from "./spinner.styles";

const Spinner = () => {
  const spinnerStyled = styledSpinner();
  return (
    <div className={spinnerStyled.spinner}>
      <PulseLoader size={15} margin={2} />
    </div>
  );
};

export default Spinner;
