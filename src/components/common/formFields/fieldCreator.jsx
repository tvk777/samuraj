import React from 'react';
import {Field} from 'redux-form';

export const FieldCreator = ({
  name,
  component,
  type,
  placeholder='',
  validators=[],
  text=''
}) => (
  <div>
    <Field
      name={name}
      component={component}
      type={type}
      placeholder={placeholder}
      validate={validators}
    />
    {text}
  </div>
);
