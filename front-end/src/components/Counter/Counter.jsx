/* eslint-disable react/prop-types */
import React from 'react';
import './style.css';

function Counter(props) {
  const { textareaCounter } = props;

  return (
    <div className="counter-container">
      { textareaCounter >= 15 && textareaCounter <= 200
        ? <p className="counter-inside-range">{ textareaCounter }</p>
        : <p className="counter-outside-range">{ textareaCounter }</p>}
    </div>
  );
}

export default Counter;
