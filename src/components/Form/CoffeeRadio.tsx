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
      <div>
        <label>Does user like coffee? </label>
        <label>
          <input type="radio" name="test" value="yes" ref={radioCoffee} />
          Yes
        </label>
        <label>
          <input type="radio" name="test" defaultChecked value="no" />
          No
        </label>
      </div>
    );
  }
}

export default CoffeeRadio;
