import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import AgreeCheckbox from './AgreeCheckbox';
import DateField from './DateField';
import FileField from './FileField';
import GenderSelect from './GenderSelect';
import NameField from './NameField';
import CoffeeRadio from './CoffeeRadio';
import PopUp from './PopUp';

type FormState = {
  errorMessage: ErrorMessage;
  confirmPopUp: boolean;
};

class Form extends Component<FormProps, FormState> {
  form: React.RefObject<HTMLFormElement> = React.createRef();
  inputName: React.RefObject<HTMLInputElement> = React.createRef();
  inputDate: React.RefObject<HTMLInputElement> = React.createRef();
  selectGender: React.RefObject<HTMLSelectElement> = React.createRef();
  radioCoffee: React.RefObject<HTMLInputElement> = React.createRef();
  radioCoffeeNo: React.RefObject<HTMLInputElement> = React.createRef();
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
      confirmPopUp: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  // Валидация формы
  validation() {
    const removeError = () => {
      this.setState({
        errorMessage: {
          name: '',
          date: '',
          gender: '',
          coffee: '',
          file: '',
          agree: '',
        },
      });
    };
    let result = true;
    removeError();
    // Поле имя не может быть меньше 3 символов
    if ((this.inputName.current as HTMLInputElement).value.length < 3) {
      this.setState((prevState) => ({
        errorMessage: {
          ...prevState.errorMessage,
          name: 'Field must not be more than 3 characters',
        },
      }));
      result = false;
    }
    // Поле имя не может быть больше 16 символов
    if ((this.inputName.current as HTMLInputElement).value.length > 16) {
      this.setState((prevState) => ({
        errorMessage: {
          ...prevState.errorMessage,
          name: 'Field must not be less than 16 characters',
        },
      }));
      result = false;
    }
    // Поле имя не может быть пустым
    if (this.inputName.current?.value === '') {
      this.setState((prevState) => ({
        errorMessage: { ...prevState.errorMessage, name: 'Name field is empty' },
      }));
      result = false;
    }
    // Дата должна быть выбрана
    if (this.inputDate.current?.value === '') {
      this.setState((prevState) => ({
        errorMessage: { ...prevState.errorMessage, date: 'Date field is empty' },
      }));
      result = false;
    }
    // Выбрать пол
    if (this.selectGender.current?.value === '') {
      this.setState((prevState) => ({
        errorMessage: { ...prevState.errorMessage, gender: 'Please, select your gender' },
      }));
      result = false;
    }
    // Валидация радио
    if (
      this.radioCoffee.current?.checked === false &&
      this.radioCoffeeNo.current?.checked === false
    ) {
      this.setState((prevState) => ({
        errorMessage: { ...prevState.errorMessage, coffee: 'Do you want coffee?' },
      }));
      result = false;
    }
    // Нужно выбрать файл
    if (this.inputFile.current?.value === '') {
      this.setState((prevState) => ({
        errorMessage: { ...prevState.errorMessage, file: 'Please, select file' },
      }));
      result = false;
    }
    // Согласен
    if (this.inputAgree.current?.checked === false) {
      this.setState((prevState) => ({
        errorMessage: { ...prevState.errorMessage, agree: 'Please, confirm to create' },
      }));
      result = false;
    }
    return result;
  }

  handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (this.validation()) {
      const id = nanoid();
      this.props.updateUserList({
        id: id,
        name: this.inputName.current?.value as string,
        birth: this.inputDate.current?.value as string,
        gender: this.selectGender.current?.value as string,
        doesUserLikeCoffe: this.radioCoffee.current?.checked as boolean,
        avatar: this.inputFile.current?.value as string,
      });
      this.form.current?.reset();
      this.setState({ confirmPopUp: true });
      setTimeout(() => {
        this.setState({ confirmPopUp: false });
      }, 2000);
    }
  }

  render() {
    return (
      <>
        {this.state.confirmPopUp ? <PopUp /> : <></>}
        <form className="form" ref={this.form} onSubmit={this.handleSubmit}>
          <fieldset className="form__wrapper">
            <legend className="form__title">Create card</legend>
            <NameField errorMessage={this.state.errorMessage} inputName={this.inputName} />
            <DateField errorMessage={this.state.errorMessage} inputDate={this.inputDate} />
            <GenderSelect errorMessage={this.state.errorMessage} selectGender={this.selectGender} />
            <CoffeeRadio
              errorMessage={this.state.errorMessage}
              radioCoffee={this.radioCoffee}
              radioCoffeeNo={this.radioCoffeeNo}
            />
            <FileField errorMessage={this.state.errorMessage} inputFile={this.inputFile} />
            <AgreeCheckbox errorMessage={this.state.errorMessage} inputAgree={this.inputAgree} />
            <input className="form__input form__submit" type="submit" value="Create" />
          </fieldset>
        </form>
      </>
    );
  }
}

export default Form;
