'use client'
import React, { useState } from "react";


interface RadioOption {
  label: string;
  value: string;
}

interface InputRadioGroupProps {
  label: string;
  options: RadioOption[];
  selectedValue: string;
  onChange: (value: string) => void;
}

const InputRadioGroup: React.FC<InputRadioGroupProps> = ({
  label,
  options,
  selectedValue,
  onChange,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <div className="input-radio-group">
      <span className="subtitle-1">{label}</span>
      
      <div className="input-radio-container">
        {options.map((option, idx) => (
         
          <label key={idx} className="body-1 ">
            <input
             
              type="radio"
              value={option.value}
              checked={selectedValue === option.value}
              onChange={handleChange}
            
            />
          {option.label}
          </label>
          
          
        ))}
      </div>
    </div>
  );
};

export default InputRadioGroup;
