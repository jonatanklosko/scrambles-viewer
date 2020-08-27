import React, { useState, useEffect } from 'react';
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import clipboard from 'clipboard-polyfill';
import { green } from '@material-ui/core/colors';
import CubeImage from './CubeImage';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  contentWrapper: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flexGrow: 1,
  },
  copied: {
    color: green[500],
  },
}));

function Scramble({ scramble, number, eventId }) {
  const classes = useStyles();
  const [copied, setCopied] = useState(false);
  const line = `${number}. ${scramble}`;

  useEffect(() => {
    setCopied(false);
  }, [scramble, number, eventId]);

  function handleCopy() {
    clipboard.writeText(line).then(() => setCopied(true));
  }

  return (
    <Card className={classes.root}>
      <CubeImage eventId={eventId} alg={scramble} size={150} />
      <div className={classes.contentWrapper}>
        <CardContent className={classes.content}>
          <Typography variant="subtitle1">{line}</Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            onClick={handleCopy}
            className={copied ? classes.copied : ''}
          >
            Copy
          </Button>
        </CardActions>
      </div>
    </Card>
  );
}

export default Scramble;
