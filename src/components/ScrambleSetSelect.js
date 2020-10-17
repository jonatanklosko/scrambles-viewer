import React from 'react';
import { Select, MenuItem } from '@material-ui/core';

function ScrambleSetSelect({ scrambleSets, value, onChange }) {
  function handleSelectChange(event) {
    const id = parseInt(event.target.value, 10);
    const scrambleSet = scrambleSets.find(scrambleSet => scrambleSet.id === id);
    onChange(scrambleSet);
  }

  return (
    <Select
      variant="outlined"
      value={value.id}
      onChange={handleSelectChange}
    >
      {scrambleSets.map((scrambleSet) => (
        <MenuItem key={scrambleSet.id} value={scrambleSet.id}>
          {scrambleSet.title}
        </MenuItem>
      ))}
    </Select>
  );
}

export default ScrambleSetSelect;
