import React, {Component} from 'react';
import {connect} from 'react-redux';

import {logout} from '../../redux/authReducer';
import Header from './Header';

class HeaderContainer extends Component {
  render() {
    return (
      <Header {...this.props}/>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    //userId: state.auth.userId,
    //email: state.auth.email,
    login: state.auth.login,
    isAuth: state.auth.isAuth,
  };
};

export default connect(mapStateToProps, {logout })(HeaderContainer);
