import React, { useState, useEffect } from 'react';
import { ChevronChart } from './ChevronChart';

export const CheckboxForm = () => {
  const [checkboxes, setCheckboxes] = useState([true]);

  useEffect(() => {
    if (checkboxes.length > 0 && checkboxes[checkboxes.length - 1]) {
      addCheckbox();
    }
  }, [checkboxes]);

  const handleCheckboxChange = (index) => {
    const newCheckboxes = [...checkboxes];
    newCheckboxes[index] = !newCheckboxes[index];
    setCheckboxes(newCheckboxes);
  };

  const addCheckbox = () => {
    const newCheckboxes = [...checkboxes, false];
    setCheckboxes(newCheckboxes);
  };

  const isAtLeastOneChecked = () => checkboxes.some((checked) => checked);

  return (
    <div>
      <form>
        {checkboxes.map((checked, index) => (
          <div key={index}>
            <input
              type="checkbox"
              checked={checked}
              onChange={() => handleCheckboxChange(index)}
              disabled={checked && !isAtLeastOneChecked()}
            />
            Checkbox {index + 1}
          </div>
        ))}
      </form>
      <ChevronChart checkboxes={checkboxes} />
    </div>
  );
};
