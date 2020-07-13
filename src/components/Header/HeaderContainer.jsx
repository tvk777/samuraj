import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as axios from 'axios';

import {setAuthUserData} from '../../redux/authReducer';
import Header from './Header';

class HeaderContainer extends Component {
    componentDidMount () {
        axios
      .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
          withCredentials: true
      })
      .then((response) => {
        if (response.data.resultCode === 0) {
          const {id, login, email} = response.data.data;
          this.props.setAuthUserData(id, email, login);
      }
      });
    }
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

export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);
