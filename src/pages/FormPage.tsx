import Form from '../components/Form';
import React, { Component } from 'react';
import Header from '../components/Header';

class FormPage extends Component {
  render() {
    return (
      <>
        <Header title={window.location.pathname.slice(1)} />
        <Form />
      </>
    );
  }
}

export default FormPage;
