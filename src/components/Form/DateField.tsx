import React, { Component } from 'react';

type DateFieldProps = {
  inputDate: React.RefObject<HTMLInputElement>;
  errorMessage: ErrorMessage;
};

class DateField extends Component<DateFieldProps> {
  constructor(props: DateFieldProps | Readonly<DateFieldProps>) {
    super(props);
  }
  render() {
    const { inputDate } = this.props;
    const { date } = this.props.errorMessage;
    return (
      <div className="form__field">
        <label htmlFor="test">Enter date :</label>
        <input className="form__date form__input" id="test" type="date" ref={inputDate} />
        <span className="form__error">{date}</span>
      </div>
    );
  }
}

export default DateField;
