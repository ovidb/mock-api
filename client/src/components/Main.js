import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';

import { fetchUser } from '../actions';

import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';

const SurveyNew = () => <h2>SurveyNew</h2>;

const styles = theme => ({ // eslint-disable-line no-unused-vars
  page: {
    padding: 10,
  },
});

class Main extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <div className={classes.page}>
              <Route exact path="/" component={Landing} />
              <Route exact path="/surveys" component={Dashboard} />
              <Route path="/surveys/new" component={SurveyNew} />
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

Main.propTypes = {
  fetchUser: PropTypes.func,
};

export default connect(null, { fetchUser })(withStyles(styles)(Main));
