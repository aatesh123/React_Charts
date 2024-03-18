import React, { useState } from 'react';

const FilterComponent = () => {
  // Sample data array of random integers
  const data = Array.from({ length: 20 }, () => Math.floor(Math.random() * 100));

  const [operator, setOperator] = useState('>');
  const [value, setValue] = useState('');
  const [filteredData, setFilteredData] = useState(data);

  const handleOperatorChange = (event) => {
    setOperator(event.target.value);
  };

  const handleValueChange = (event) => {
    setValue(event.target.value);
  };

  const filterData = () => {
    const filtered = data.filter(item => {
      switch (operator) {
        case '>':
          return item > value;
        case '<':
          return item < value;
        case '=':
          return item === value;
        default:
          return true;
      }
    });
    setFilteredData(filtered);
  };

  return (
    <div>
      <h2>Filter Records</h2>
      <select value={operator} onChange={handleOperatorChange}>
        <option value=">">Greater than</option>
        <option value="<">Less than</option>
        <option value="=">Equal to</option>
      </select>
      <input type="number" value={value} onChange={handleValueChange} />
      <button onClick={filterData}>Filter</button>
      
      <div>
        <h3>Filtered Data</h3>
        <ul>
          {filteredData.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FilterComponent;
