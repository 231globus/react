import React, { Component } from 'react';

type NameFieldProps = {
  inputName: React.RefObject<HTMLInputElement>;
};

type NameFieldState = {
  error: string;
};

class NameField extends Component<NameFieldProps, NameFieldState> {
  constructor(props: NameFieldProps | Readonly<NameFieldProps>) {
    super(props);
    this.state = {
      error: '',
    };
  }
  render() {
    const { inputName } = this.props;
    return (
      <div>
        <input
          className="form__name form__input"
          type="text"
          placeholder="Enter your name"
          ref={inputName}
        />
        <span className="form__error">{this.state.error}</span>
      </div>
    );
  }
}

export default NameField;
