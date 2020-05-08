import React from 'react';
import { Select, MenuItem } from '@material-ui/core';

function ScrambleSetSelect({ scrambleSets, value, onChange }) {
  return (
    <Select
      variant="outlined"
      value={value}
      onChange={(event) => onChange(event.target.value)}
    >
      {scrambleSets.map((scrambleSet) => (
        <MenuItem key={scrambleSet.scrambleSetId} value={scrambleSet}>
          {scrambleSet.title}
        </MenuItem>
      ))}
    </Select>
  );
}

export default ScrambleSetSelect;
