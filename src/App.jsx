
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MainContainer from './containers/MainContainer/MainContainer.jsx';
import LoginContainer from './containers/Login/Login.jsx';
import SignUpContainer from './containers/SignUp/SignUp.jsx';

const mapStateToProps = store => ({
  // add pertinent state here
  skills: store.skills,
  login: store.login,
  signup: store.signUp
});

const mapDispatchToProps = dispatch => ({
  // return bindActionCreators(actionCreators, dispatch);
});

class App extends Component {

  constructor(props) {
    console.log('props in App', props);
    // console.log('props in Login', props.login);
    super(props);
  }

  render() {
    return(
      <div>
        <LoginContainer/>
        <MainContainer/>
        <SignUpContainer/>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);