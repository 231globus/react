import React, { Component, FormEvent } from 'react';

class Form extends Component<object, object> {
  inputName: React.RefObject<HTMLInputElement> = React.createRef();
  constructor(props: object) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event: FormEvent) {
    event.preventDefault();
    if (this.inputName.current) {
      console.log(this.inputName.current.value);
    }
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
            />
            <select className="form__gender form__input" name="cars" id="cars">
              <option value="" defaultChecked>
                Chose your gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <div>
              <label>Do you like coffee? </label>
              <label>
                <input type="radio" name="test" value="1" />
                Yes
              </label>
              <label>
                <input type="radio" name="test" defaultChecked value="2" />
                No
              </label>
            </div>
            <label className="form__file">
              <input type="file" />
              <span className="form__file-btn">Chose photo</span>
              <span className="form__file-text">Max file size 2mb</span>
            </label>
            <label>
              <input type="checkbox" name="languages" value="CSS" /> I agree with to the terms
            </label>
            <input className="form__input form__submit" type="submit" value="Create" />
          </fieldset>
        </form>
      </>
    );
  }
}

export default Form;
