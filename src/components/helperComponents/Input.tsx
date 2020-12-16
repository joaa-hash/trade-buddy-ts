import React from "react";
import { JsxElement } from "typescript";

const Input = (props: {
  input: any;
  label: string;
  placeholder: string;
  icon: JsxElement;
  meta: { touched: boolean; error: any };
  labelClass?: string;
  inputClass?: string;
  idCSS?: string;
  // type?: string;
  step?: string | number;
  type?: string;
}) => {
  const {
    input,
    label,
    placeholder,
    icon,
    meta: { touched, error },
    inputClass,
    labelClass,
    idCSS,
    type,
    step,
  } = props;

  return (
    <div className="sixteen wide field">
      <div className="ui padded one column grid">
        <div className="column">
          <label
            className={`${labelClass} ui label yellow five wide field`}
            id={idCSS}
          >
            {label}
          </label>
        </div>
        {/* <div className="ui hidden divider"></div> */}
      </div>
      <div className="ui padded one column grid">
        <div className="column">{icon}</div>
      </div>
      <div>
        <input
          {...input}
          step={step}
          type={type}
          placeholder={placeholder}
          className={inputClass}
        />
        {touched && error && (
          <div className="ui error message" style={{ color: "red" }}>
            {error}
          </div>
        )}
      </div>
    </div>
  );
};

export default Input;
