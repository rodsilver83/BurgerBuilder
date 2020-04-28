import React from 'react';
import css from './Input.module.css';

const Input = (props) => {
  let inputElement = null;
  switch (props.elementType) {
    case 'input':
      inputElement = <input
        className={css.InputElement}
        {...props.elementConfig}
        value={props.value}
        onChange={props.changed}></input>
      break;
    case 'select':
      inputElement = <select
        className={css.SelectElement}
        value={props.value}
        onChange={props.changed}>
        {props.elementConfig.options.map((option) => (
          <option key={option.value}
            value={option.value}>
            {option.value}
          </option>
        ))}
      </select>
      break;
    default:
      break;
  }
  return (
    <div className={css.Input}>
      <label className={css.Label}>{props.label}</label>
      {inputElement}
    </div>
  )
}

export default Input;