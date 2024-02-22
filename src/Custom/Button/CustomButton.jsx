import React from 'react';
import './CustomButtom.scss';

const CustomButton = ({buttonTheme, title, handleProp }) => {
  let buttonClass = "custom-button";
  if (buttonTheme) {
    buttonClass += " " + buttonTheme;
  }
  return (
    <button className={buttonClass} onClick={handleProp}>
      {title}
    </button>
  );
};

export default CustomButton;
