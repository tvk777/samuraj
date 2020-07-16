import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getAuth} from '../../api/api'

import {setAuthUserData} from '../../redux/authReducer';
import Header from './Header';

class HeaderContainer extends Component {
    componentDidMount () {
        getAuth()
      .then((data) => {
        if (data.resultCode === 0) {
          const {id, login, email} = data.data;
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
