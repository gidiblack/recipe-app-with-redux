import React from "react";
import { SelectInputProps } from "../../types";

const SelectInput: React.FC<SelectInputProps> = (props) => {
  const { name, label, onChange, defaultOption, value, error, options } = props;
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <div className="field">
        {/* NOTE: value is set here rather than on the option element*/}
        <select
          name={name}
          value={value}
          onChange={onChange}
          className="form-control my-2"
        >
          <option value="">{defaultOption}</option>
          {options.map((option, index) => {
            return (
              <option key={index} value={option.value}>
                {option.text}
              </option>
            );
          })}
        </select>
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </div>
  );
};

export default SelectInput;
