import React, { Component } from 'react';

class PopUp extends Component {
  render() {
    return (
      <div className="pop-up">
        <div className="pop-up__message">
          <h1>congratulations. your card has been successfully created</h1>
          <p>this window will close automatically after 2 seconds</p>
        </div>
      </div>
    );
  }
}

export default PopUp;
