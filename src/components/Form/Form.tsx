import React, { Component } from 'react';
import AgreeCheckbox from './AgreeCheckbox';
import DateField from './DateField';
import FileField from './FileField';
import GenderSelect from './GenderSelect';
import NameField from './NameField';
import CoffeeRadio from './CoffeeRadio';
import { validation } from '../../utils/validation';

class Form extends Component<FormProps, object> {
  form: React.RefObject<HTMLFormElement> = React.createRef();
  inputName: React.RefObject<HTMLInputElement> = React.createRef();
  inputDate: React.RefObject<HTMLInputElement> = React.createRef();
  selectGender: React.RefObject<HTMLSelectElement> = React.createRef();
  radioCoffee: React.RefObject<HTMLInputElement> = React.createRef();
  inputFile: React.RefObject<HTMLInputElement> = React.createRef();
  inputAgree: React.RefObject<HTMLInputElement> = React.createRef();
  constructor(props: FormProps) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // validation([this.inputName, this.inputDate, this.radioCoffee, this.inputFile, this.inputAgree]);
    this.props.updateUserList({
      id: 1,
      name: this.inputName.current?.value as string,
      birth: this.inputDate.current?.value as string,
      gender: this.selectGender.current?.value as string,
      doesUserLikeCoffe: this.radioCoffee.current?.checked as boolean,
      avatar: this.inputFile.current?.value as string,
    });
    this.form.current?.reset();
  }
  render() {
    return (
      <>
        <form className="form" ref={this.form} onSubmit={this.handleSubmit}>
          <fieldset className="form__wrapper">
            <legend className="form__title">Create card</legend>
            <NameField inputName={this.inputName} />
            <DateField inputDate={this.inputDate} />
            <GenderSelect selectGender={this.selectGender} />
            <CoffeeRadio radioCoffee={this.radioCoffee} />
            <FileField inputFile={this.inputFile} />
            <AgreeCheckbox inputAgree={this.inputAgree} />
            <input className="form__input form__submit" type="submit" value="Create" />
          </fieldset>
        </form>
      </>
    );
  }
}

export default Form;
