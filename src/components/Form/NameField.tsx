import React, { Component } from 'react';

type NameFieldProps = {
  inputName: React.RefObject<HTMLInputElement>;
  errorMessage: ErrorMessage;
};

class NameField extends Component<NameFieldProps, object> {
  constructor(props: NameFieldProps | Readonly<NameFieldProps>) {
    super(props);
  }
  render() {
    const { inputName } = this.props;
    const { name } = this.props.errorMessage;
    return (
      <div className="form__field">
        <input
          className="form__name form__input"
          type="text"
          placeholder="Enter your name"
          ref={inputName}
        />
        <span className="form__error">{name}</span>
      </div>
    );
  }
}

export default NameField;
