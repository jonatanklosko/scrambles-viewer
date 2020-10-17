import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ScrambleSetSelect from './ScrambleSetSelect';
import ScrambleSet from './ScrambleSet';
import { activityCodeToName } from '../lib/wcif';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}));

function wcifToScrambleSets(wcif) {
  return wcif.events
    .flatMap(event => {
      return event.rounds.flatMap(round =>
        round.scrambleSets.map(({ id, scrambles, extraScrambles }, index) => ({
          id,
          scrambles,
          extraScrambles,
          eventId: event.id,
          title: scrambleSetTitle(round.id, index + 1),
        })));
    });
}

function scrambleSetTitle(roundId, number) {
  const roundName = activityCodeToName(roundId);
  return `${roundName}, Set ${number}`;
}

function ScramblesViewer({ scramblesJson }) {
  const classes = useStyles();
  const scrambleSets = wcifToScrambleSets(scramblesJson.wcif);
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
