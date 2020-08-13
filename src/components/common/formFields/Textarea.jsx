import React from 'react';
import styles from './formFields.module.css';

export const Textarea = ({input, meta, ...props}) => {
  const hasEror = meta.error && meta.touched;
  return (
    <div className={styles.formControl + ' ' + (hasEror && styles.error)}>
      <div>
        <textarea {...input} {...props} />
      </div>
      {hasEror && <span>{meta.error}</span>}
    </div>
  );
};
