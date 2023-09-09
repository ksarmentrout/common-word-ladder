import React from 'react';

const Dropdown = ({ order, options, selectedOption, onSelectChange }) => {
  return (
    <div className="dropdown">
      <div>
        <label className='dropdown-label'>Word {order} Source</label>
      </div>
      <select value={selectedOption} onChange={(e) => onSelectChange(e.target.value)}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;

