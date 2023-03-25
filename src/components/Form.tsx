import React, { Component, FormEvent } from 'react';

type User = {
  id: number;
  name: string;
  birth: string;
  gender: string;
  doesUserLikeCoffe: boolean;
  avatar: string;
};

type FormProps = {
  updateUserList: (user: User) => void;
};

class Form extends Component<FormProps, object> {
  form: React.RefObject<HTMLFormElement> = React.createRef();
  inputName: React.RefObject<HTMLInputElement> = React.createRef();
  inputDate: React.RefObject<HTMLInputElement> = React.createRef();
  selectGender: React.RefObject<HTMLSelectElement> = React.createRef();
  radioYes: React.RefObject<HTMLInputElement> = React.createRef();
  radioNo: React.RefObject<HTMLInputElement> = React.createRef();
  inputFile: React.RefObject<HTMLInputElement> = React.createRef();
  inputAgree: React.RefObject<HTMLInputElement> = React.createRef();
  constructor(props: FormProps) {
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
    this.props.updateUserList({
      id: 1,
      name: this.inputName.current?.value as string,
      birth: this.inputDate.current?.value as string,
      gender: this.selectGender.current?.value as string,
      doesUserLikeCoffe: this.radioYes.current?.checked as boolean,
      avatar: this.inputName.current?.value as string,
    });
    this.form.current?.reset();
  }
  render() {
    return (
      <>
        <form className="form" ref={this.form} onSubmit={this.handleSubmit}>
          <fieldset className="form__wrapper">
            <legend className="form__title">Create card</legend>
            <input
              className="form__name form__input"
              type="text"
              placeholder="Enter your name"
              ref={this.inputName}
            />
            <input
              className="form__date form__input"
              type="date"
              placeholder="date"
              ref={this.inputDate}
            />
            <select className="form__gender form__input" ref={this.selectGender}>
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
