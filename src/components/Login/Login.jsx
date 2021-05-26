import React from 'react';
import {reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom'
import {Input} from '../common/formFields/Input';
import {required, minLength, email} from '../../utils/validators/validators';
import {login} from '../../redux/authReducer';
import styles from '../common/formFields/formFields.module.css';
import {FieldCreator} from '../common/formFields/fieldCreator';

const minLength3 = minLength(3);
const minLength6 = minLength(6);

const LoginForm = ({handleSubmit, error}) => {
  return (
    <form onSubmit={handleSubmit}>
      <FieldCreator name="login" component={Input} type="text" placeholder="Login" validators={[required, minLength3]}  />
      <FieldCreator name="email" component={Input} type="text" placeholder="Email" validators={[required, email]}  />
      <FieldCreator name="password" component={Input} type="password" placeholder="Password" validators={[required, minLength6]}  />
      <FieldCreator name="rememberMe" component={Input} type="checkbox" text="Remember me"  />
      {error && <div className={styles.formSummaryError}>{error}</div>}
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {
  const onSubmitHandle = (values) => {
    props.login(values.email, values.password, values.rememberMe)
  };

  if(props.isAuth) {
    return <Redirect to="/profile" />
  }

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmitHandle} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);


