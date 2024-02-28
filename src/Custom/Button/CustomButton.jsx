import React from 'react';
import './CustomButtom.scss';

const CustomButton = ({buttonTheme, title, handleProp, type }) => {
  let buttonClass = "custom-button";
  if (buttonTheme) {
    buttonClass += " " + buttonTheme;
  }
  return (
    <button type={type} className={buttonClass} onClick={handleProp}>
      {title}
    </button>
  );
};

export default CustomButton;
