import React from 'react';
import FormStyle1 from './FormStyle1';
import FormStyle2 from './FormStyle2';
import FormStyle3 from './FormStyle3';

const FormWrapper = ({ styleIndex }) => {
  const styles = [FormStyle1, FormStyle2, FormStyle3];
  const ActiveForm = styles[styleIndex] || FormStyle1;

  return (
    <div className="w-full max-w-5xl">
      <ActiveForm />
    </div>
  );
};

export default FormWrapper;
