import React, { useRef } from 'react';
import { Button, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    height: '100vh',
  },
  grid: {
    height: '100%',
  },
  fileInput: {
    display: 'none',
  },
}));

function JsonImport({ onImport }) {
  const classes = useStyles();
  const inputRef = useRef(null);

  function handleFileChange(event) {
    if (event.target.files.length === 0) return;
    const [file] = event.target.files;
    const reader = new FileReader();
    reader.onload = (event) => {
      const json = JSON.parse(event.target.result);
      onImport(json);
    };
    reader.readAsText(file);
  }

  return (
    <div className={classes.root}>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        className={classes.grid}
        spacing={2}
      >
        <Grid item>
          <Typography variant="h5">Scrambles Viewer</Typography>
        </Grid>
        <Grid item>
          <Typography>
            Please select the scrambles JSON file generated by TNoodle.
          </Typography>
        </Grid>
        <Grid item>
          <input
            ref={inputRef}
            type="file"
            accept="application/json"
            onChange={handleFileChange}
            className={classes.fileInput}
          />
          <Button
            variant="outlined"
            size="large"
            color="primary"
            onClick={() => inputRef.current.click()}
          >
            Import
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default JsonImport;
