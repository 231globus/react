import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <>
        <form>
          <fieldset className="form">
            <legend className="form__title">Create card</legend>
            <input className="form__name" type="text" name="" id="" placeholder="Enter your name" />
            <input className="form__date" type="date" name="" id="" placeholder="date" />
            <select name="cars" id="cars">
              <option value="" defaultChecked>
                Chose your gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <label>
              <input type="radio" name="test" value="1" />
              net
            </label>
            <label>
              <input type="radio" name="test" defaultChecked value="2" />
              da
            </label>
            <input type="file" name="" id="" />
            <label>
              <input type="checkbox" name="languages" value="CSS" />
              Agree
            </label>
            <input type="submit" value="Create" />
          </fieldset>
        </form>
      </>
    );
  }
}

export default Form;
