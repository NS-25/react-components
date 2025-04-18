import React from "react";
import { useState } from "react";

const GenderGroup = ({ onUpdateGender, label, values, name, item }) => {
  const [selectedGender, setSelectedGender] = useState(" ");

  const handleGenderSelected = (event) => {
    setSelectedGender(event.target.value);
    onUpdateGender(event.target.value);
  };

  const renderGenderSelected = (values) => {
    return values.map((value) => {
      return (
        <select
          name={selectedGender}
          value={value}
          onChange={handleGenderSelected}
        >
          <option value={item}></option>
        </select>
      );
    });
  };

  return (
    <div>
      <div className="gender-group">
        <label htmlFor={name}>
          <span>{label}</span>
          {renderGenderSelected(values)}
        </label>
      </div>
    </div>
  );
};

export default GenderGroup;
