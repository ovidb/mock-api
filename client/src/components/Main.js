import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchUser } from '../actions';

import Header from './Header';

const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;
const Landing = () => <h2>Landing</h2>;


class Main extends Component {

  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (<div>
      <BrowserRouter>
        <div>
          <Header/>
          <Route exact path="/" component={Landing}/>
          <Route exact path="/surveys" component={Dashboard}/>
          <Route path="/surveys/new" component={SurveyNew}/>
        </div>
      </BrowserRouter>
    </div>)
  }
}

Main.propTypes = {
  fetchUser: PropTypes.func,
};

export default connect(null, { fetchUser })(Main);
