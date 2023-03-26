import React, { Component } from 'react';
import AgreeCheckbox from './AgreeCheckbox';
import DateField from './DateField';
import FileField from './FileField';
import GenderSelect from './GenderSelect';
import NameField from './NameField';
import CoffeeRadio from './CoffeeRadio';

type FormState = {
  errorMessage: ErrorMessage;
};

class Form extends Component<FormProps, FormState> {
  form: React.RefObject<HTMLFormElement> = React.createRef();
  inputName: React.RefObject<HTMLInputElement> = React.createRef();
  inputDate: React.RefObject<HTMLInputElement> = React.createRef();
  selectGender: React.RefObject<HTMLSelectElement> = React.createRef();
  radioCoffee: React.RefObject<HTMLInputElement> = React.createRef();
  inputFile: React.RefObject<HTMLInputElement> = React.createRef();
  inputAgree: React.RefObject<HTMLInputElement> = React.createRef();
  constructor(props: FormProps) {
    super(props);
    this.state = {
      errorMessage: {
        name: '',
        date: '',
        gender: '',
        coffee: '',
        file: '',
        agree: '',
      },
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateState = this.updateState.bind(this);
  }
  updateState(newMessage: ErrorMessage) {
    this.setState({ errorMessage: newMessage });
  }
  handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    this.form.current?.reset();
  }
  render() {
    console.log(this.state.errorMessage.name);
    return (
      <>
        <form className="form" ref={this.form} onSubmit={this.handleSubmit}>
          <fieldset className="form__wrapper">
            <legend className="form__title">Create card</legend>
            <NameField errorMessage={this.state.errorMessage} inputName={this.inputName} />
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
