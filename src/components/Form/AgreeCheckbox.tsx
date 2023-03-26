import React, { Component } from 'react';

type AgreeCheckboxProps = {
  inputAgree: React.RefObject<HTMLInputElement>;
  errorMessage: ErrorMessage;
};

class AgreeCheckbox extends Component<AgreeCheckboxProps> {
  constructor(props: AgreeCheckboxProps | Readonly<AgreeCheckboxProps>) {
    super(props);
  }
  render() {
    const { inputAgree } = this.props;
    const { agree } = this.props.errorMessage;
    return (
      <div className="form__filed">
        <input type="checkbox" value="agree" ref={inputAgree} /> Yes, i want to create a card?
        <span className="form__error">{agree}</span>
      </div>
    );
  }
}

export default AgreeCheckbox;
