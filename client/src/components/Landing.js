// @flow weak

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 30,
  },
  paper: {
    padding: 16,
    color: theme.palette.text.secondary,
  },
});

function Landing(props) {
  const classes = props.classes;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography type="title" gutterBottom>
              Plexhex
            </Typography>
            <Typography type="subheading" gutterBottom>
              Your start-up engine.
            </Typography>
            <Typography type="body1" gutterBottom>
              Let your vision come to life. It's not always easy to do it. But you can do it.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

Landing.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Landing);