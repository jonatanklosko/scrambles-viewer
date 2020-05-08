import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ScrambleSetSelect from './ScrambleSetSelect';
import ScrambleSet from './ScrambleSet';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}));

function ScramblesViewer({ scramblesJson }) {
  const classes = useStyles();
  const { sheets: scrambleSets } = scramblesJson;
  const [scrambleSet, setScrambleSet] = useState(scrambleSets[0]);

  return (
    <div className={classes.root}>
      <Grid container direction="column" alignItems="center" spacing={2}>
        <Grid item>
          <ScrambleSetSelect
            scrambleSets={scrambleSets}
            value={scrambleSet}
            onChange={setScrambleSet}
          />
        </Grid>
        <Grid item>
          <ScrambleSet scrambleSet={scrambleSet} />
        </Grid>
      </Grid>
    </div>
  );
}

export default ScramblesViewer;
