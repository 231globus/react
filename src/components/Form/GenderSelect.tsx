import React, { Component } from 'react';

type GenderSelectProps = {
  selectGender: React.RefObject<HTMLSelectElement>;
  errorMessage: ErrorMessage;
};

class GenderSelect extends Component<GenderSelectProps> {
  constructor(props: GenderSelectProps | Readonly<GenderSelectProps>) {
    super(props);
  }
  render() {
    const { selectGender } = this.props;
    const { gender } = this.props.errorMessage;
    return (
      <div className="form__field">
        <select className="form__gender form__input" ref={selectGender}>
          <option value="" defaultChecked>
            Chose your gender
          </option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <span className="form__error">{gender}</span>
      </div>
    );
  }
}

export default GenderSelect;
