import React, { useEffect, useState } from 'react';

interface ChipProps {
  label: string;
  value: string
  addHandler: any;
  removeHandler: any;
  id: number;
}

const Chip: React.FC<ChipProps> = ({ id, addHandler, removeHandler, label, value }) => {
  const [checked, setChecked] = useState(false);
  const [val, setVal] = useState("");
  const handleClick = () => {
    setChecked(!checked);
    setVal(value)
  };
  useEffect(() => {
   
    checked ? addHandler(val) : removeHandler(val);
  }, [val, checked])
  return (
    <div  className={`chip small-1 ${checked ? 'checked' : ''}`} onClick={handleClick}>
      {label}
      <input   type="checkbox" value={value} />
      
    </div>
  );
};

export default Chip;