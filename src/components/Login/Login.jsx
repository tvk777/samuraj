import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {Input} from '../common/formFields/Input';
import {required, minLength, email} from '../../utils/validators/validators';

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
          type="text"
          placeholder="Password"
          validate={[required, minLength6]} 
        />
      </div>
      <div>
        <Field name="rememberMe" component={Input} type="checkbox" />
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


