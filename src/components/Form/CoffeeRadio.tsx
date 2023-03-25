import React, { Component } from 'react';

type CoffeeRadioProps = {
  radioCoffee: React.RefObject<HTMLInputElement>;
};

class CoffeeRadio extends Component<CoffeeRadioProps> {
  constructor(props: CoffeeRadioProps | Readonly<CoffeeRadioProps>) {
    super(props);
  }
  render() {
    const { radioCoffee } = this.props;
    return (
      <div className="form__coffee form__input">
        <label>coffee? </label>
        <label>
          <input type="radio" name="test" value="yes" ref={radioCoffee} />
          Yes
        </label>
        <label>
          <input type="radio" name="test" defaultChecked value="no" />
          No
        </label>
        <span className="form__error"></span>
      </div>
    );
  }
}

export default CoffeeRadio;
