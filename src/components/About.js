import React from 'react';

export default () => {
  return (
    <div>
      <h1 className='display-4'>About PhoneBook</h1>
      <p className='lead'>
        Simple app for testing CRUD operations using fake API. Validation is
        enabled on the form.
      </p>
      <p className='text-secondary'>
        - As a REST API it is used <strong>JSONPlaceholder</strong> <br />- For
        the easier passing data throught component tree it is used{' '}
        <strong>Context</strong> <br />- <strong>Axios</strong> is used for
        promise based HTTP client <br />- <strong>ReactRouter</strong> for
        navigation throught page <br />- <strong>ClassNames</strong> for
        conditionally joining classNames together <br />-{' '}
        <strong>Bootstrap</strong> for style <br />-{' '}
        <strong>FontAwesome</strong> for icons
      </p>
    </div>
  );
};
