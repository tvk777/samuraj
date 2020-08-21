import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom'
import {Input} from '../common/formFields/Input';
import {required, minLength, email} from '../../utils/validators/validators';
import {login} from '../../redux/authReducer';
import styles from '../common/formFields/formFields.module.css';

const minLength3 = minLength(3);
const minLength6 = minLength(6);

const LoginForm = (props) => {
  const {handleSubmit} = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field name="login" component={Input} type="text" placeholder="Login" validate={[required, minLength3]} />
      </div>
      <div>
        <Field name="email" component={Input} type="text" placeholder="Email"  validate={[required, email]} />
      </div>

      <div>
        <Field
          name="password"
          component={Input}
          type="password"
          placeholder="Password"
          validate={[required, minLength6]} 
        />
      </div>
      <div>
        <Field name="rememberMe" component={Input} type="checkbox" />
        Remember me
      </div>
      {props.error && <div className={styles.formSummaryError}>{props.error}</div>}
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


