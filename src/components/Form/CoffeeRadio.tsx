import React, { Component } from 'react';

type CoffeeRadioProps = {
  radioCoffee: React.RefObject<HTMLInputElement>;
  radioCoffeeNo: React.RefObject<HTMLInputElement>;
  errorMessage: ErrorMessage;
};

class CoffeeRadio extends Component<CoffeeRadioProps> {
  constructor(props: CoffeeRadioProps | Readonly<CoffeeRadioProps>) {
    super(props);
  }
  render() {
    const { radioCoffee } = this.props;
    const { radioCoffeeNo } = this.props;
    const { coffee } = this.props.errorMessage;
    return (
      <div className="form__field">
        <div className="form__coffee form__input">
          <label>coffee? </label>
          <label>
            <input type="radio" name="test" value="yes" ref={radioCoffee} />
            Yes
          </label>
          <label>
            <input type="radio" name="test" value="no" ref={radioCoffeeNo} />
            No
          </label>
          <span className="form__error">{coffee}</span>
        </div>
      </div>
    );
  }
}

export default CoffeeRadio;
