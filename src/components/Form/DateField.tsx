import React, { Component } from 'react';

type DateFieldProps = {
  inputDate: React.RefObject<HTMLInputElement>;
};

class DateField extends Component<DateFieldProps> {
  constructor(props: DateFieldProps | Readonly<DateFieldProps>) {
    super(props);
  }
  render() {
    const { inputDate } = this.props;
    return (
      <div className="form__field">
        <label htmlFor="test">Your birthday :</label>
        <input className="form__date form__input" id="test" type="date" ref={inputDate} />
        <span className="form__error"></span>
      </div>
    );
  }
}

export default DateField;
