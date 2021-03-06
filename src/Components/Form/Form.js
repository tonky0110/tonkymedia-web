import React from 'react';

const Form = ({
    submitFn,
    className,
    children
}) => (
    <form
      classNam={className}
      onSubmit={(e) => {
        e.preventDefault();
        submitFn();
      }}
    >
      {children}
    </form>
);

export default Form;
