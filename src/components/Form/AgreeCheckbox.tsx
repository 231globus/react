import React, { Component } from 'react';

type AgreeCheckboxProps = {
  inputAgree: React.RefObject<HTMLInputElement>;
};

class AgreeCheckbox extends Component<AgreeCheckboxProps> {
  constructor(props: AgreeCheckboxProps | Readonly<AgreeCheckboxProps>) {
    super(props);
  }
  render() {
    const { inputAgree } = this.props;
    return (
      <div className="form__filed">
        <input type="checkbox" value="agree" ref={inputAgree} /> I agree with to the terms
        <span className="form__error"></span>
      </div>
    );
  }
}

export default AgreeCheckbox;
