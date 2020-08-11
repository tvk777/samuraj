import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';

const LoginForm = (props) => {
  const {handleSubmit} = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field name="login" component="input" type="text" placeholder="Login" />
      </div>
      <div>
        <Field name="email" component="input" type="text" placeholder="Email" />
      </div>

      <div>
        <Field
          name="password"
          component="input"
          type="text"
          placeholder="Password"
        />
      </div>
      <div>
        <Field name="rememberMe" component="input" type="checkbox" />
        Remember me
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = () => {
  const onSubmitHandle = (values) => {
    console.log(values);
  };
  console.log(0);
  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmitHandle} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    login: state.auth.login,
    isAuth: state.auth.isAuth,
  };
};
export default connect(mapStateToProps, {})(Login);


