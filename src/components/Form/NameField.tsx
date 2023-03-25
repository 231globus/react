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
  }
  render() {
    const { inputName } = this.props;
    return (
      <div>
        <input
          className="form__name form__input"
          type="text"
          placeholder="Enter your name"
          maxLength={16}
          minLength={3}
          ref={inputName}
        />
        <span className="form__error"></span>
      </div>
    );
  }
}

export default NameField;
