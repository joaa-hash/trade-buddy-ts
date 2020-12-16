import React from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export const RenderDatePicker = (props: {
  input: any;
  label: string;
  meta: { touched: any; error: any };
  labelClass?: string;
  idCSS: string;
}) => {
  const {
    input,
    label,
    meta: { touched, error },
    labelClass,
    idCSS,
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
      </div>
      <DatePicker
        {...input}
        dateFormat="yyyy/MM/dd"
        disabledKeyboardNavigation
        maxDate={new Date()}
        selected={input.value ? input.value : new Date()}
        onChange={(val) => input.onChange(val)}
        onBlur={(val) => input.onBlur(val)}
      />
      {touched && error && (
        <div className="ui error message" style={{ color: "red" }}>
          {error}
        </div>
      )}
    </div>
  );
};
