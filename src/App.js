import React, {Component} from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer'
import Login from './components/Login/Login'
import { Route, withRouter } from 'react-router-dom'
import {initializeApp} from './redux/appReducer';
import { Preloader } from './components/common/Preloader/Preloader';

 
class App extends Component {
  componentDidMount () {
    this.props.initializeApp();
}

  render() {
    if(!this.props.initialized) {
      return <Preloader />
    }
    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
          <Route path='/dialogs' render={() => <DialogsContainer />} />
          <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
          <Route path='/users' render={() => <UsersContainer />} />
          <Route path='/music' component={Music} />
          <Route path='/news' component={News} />
          <Route path='/settings' component={Settings} />
          <Route path='/login' component={Login} />
        </div>
      </div>
  );
}
}

const mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized
  };
};

export default compose(
  withRouter,
  connect(mapStateToProps, { initializeApp }),
)(App)

