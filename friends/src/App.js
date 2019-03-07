import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { friends, spinnerOn, spinnerOff} from './state/actionCreator';
import Loader from 'react-loader-spinner';
import Container from './components/container';

class App extends Component {
  componentDidMount() {
    this.props.friends();
  }
  render() {
    return (
      <Router>
      <Container />
      </Router>
    )
  }
}

function mapStateToProps(state) {
  return {
    friends: state.friends,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    friends,
    spinnerOn,
    spinnerOff,
  }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
