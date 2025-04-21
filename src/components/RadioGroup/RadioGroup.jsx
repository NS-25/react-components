import React, { useState } from "react";

const RadioGroup = ({ onUpdate, values, name, label }) => {
  const [selectedValue, setSelectedValue] = useState(values[0]);

  const handleChange = (e) => {
    setSelectedValue(e.target.value);
    onUpdate(e.target.value);
  };

  const renderRadios = (values) => {
    return values.map((value) => {
      return (
        <input
          key={value.key}
          type="radio"
          name={name}
          value={value}
          checked={selectedValue === value}
          onChange={handleChange}
        />
      );
    });
  };

  return (
    <div className="radio-group">
      <label htmlFor={name}>
        <span> {label}</span>
        {renderRadios(values)}
      </label>
    </div>
  );
};

export default RadioGroup;
