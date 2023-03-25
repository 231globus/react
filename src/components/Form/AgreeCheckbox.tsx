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
      <div>
        <label>
          <input type="checkbox" value="agree" ref={inputAgree} /> I agree with to the terms
        </label>
      </div>
    );
  }
}

export default AgreeCheckbox;
