import React, { Component, FormEvent } from 'react';

class Form extends Component<object, object> {
  inputName: React.RefObject<HTMLInputElement> = React.createRef();
  inputDate: React.RefObject<HTMLInputElement> = React.createRef();
  selectGender: React.RefObject<HTMLSelectElement> = React.createRef();
  radioYes: React.RefObject<HTMLInputElement> = React.createRef();
  radioNo: React.RefObject<HTMLInputElement> = React.createRef();
  inputFile: React.RefObject<HTMLInputElement> = React.createRef();
  inputAgree: React.RefObject<HTMLInputElement> = React.createRef();

  constructor(props: object) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validation = this.validation.bind(this);
  }
  validation() {
    let result = true;
    if (!this.inputAgree.current?.checked) {
      result = false;
    }
    return result;
  }
  handleSubmit(event: FormEvent) {
    event.preventDefault();
    console.log(this.validation());
  }
  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <fieldset className="form">
            <legend className="form__title">Create card</legend>
            <input
              className="form__name form__input"
              type="text"
              name=""
              id=""
              placeholder="Enter your name"
              ref={this.inputName}
            />
            <input
              className="form__date form__input"
              type="date"
              name=""
              id=""
              placeholder="date"
              ref={this.inputDate}
            />
            <select
              className="form__gender form__input"
              name="cars"
              id="cars"
              ref={this.selectGender}
            >
              <option value="" defaultChecked>
                Chose your gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <div>
              <label>Do you like coffee? </label>
              <label>
                <input type="radio" name="test" value="yes" ref={this.radioYes} />
                Yes
              </label>
              <label>
                <input type="radio" name="test" defaultChecked value="no" ref={this.radioNo} />
                No
              </label>
            </div>
            <label className="form__file">
              <input type="file" ref={this.inputFile} />
              <span className="form__file-btn">Chose photo</span>
              <span className="form__file-text">Max file size 2mb</span>
            </label>
            <label>
              <input type="checkbox" value="agree" ref={this.inputAgree} /> I agree with to the
              terms
            </label>
            <input className="form__input form__submit" type="submit" value="Create" />
          </fieldset>
        </form>
      </>
    );
  }
}

export default Form;
