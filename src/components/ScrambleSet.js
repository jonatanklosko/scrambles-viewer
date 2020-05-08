import React, { useState } from 'react';
import { Grid, Button } from '@material-ui/core';
import Scramble from './Scramble';
import { Typography } from '@material-ui/core';

function ScrambleSet({ scrambleSet }) {
  const [version, setVersion] = useState(0);

  function handleRefresh() {
    setVersion(version + 1);
  }

  return (
    <Grid container direction="column" spacing={2} key={version}>
      {scrambleSet.scrambles.map((scramble, index) => (
        <Grid item key={index}>
          <Scramble
            scramble={scramble}
            number={`${index + 1}`}
            eventId={scrambleSet.event}
          />
        </Grid>
      ))}
      <Grid item>
        <Typography variant="h6">Extra</Typography>
      </Grid>
      {scrambleSet.extraScrambles.map((scramble, index) => (
        <Grid item key={index}>
          <Scramble
            scramble={scramble}
            number={`E${index + 1}`}
            eventId={scrambleSet.event}
          />
        </Grid>
      ))}
      <Grid item>
        <Button onClick={handleRefresh}>Refresh</Button>
      </Grid>
    </Grid>
  );
}

export default ScrambleSet;
