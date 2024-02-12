import React from 'react';

const InformationSticker = ({ valueTheme, title, value, ...props }) => {
  let valueClass = "information-sticker__value";
  if (valueTheme) {
    valueClass += " " + valueTheme;
  }
  return (
    <div className="information-sticker">
      <span className="information-sticker__title">{title}</span>
      <span className= {valueClass}>{value} USD</span>
    </div>
  );
}

export default InformationSticker;
