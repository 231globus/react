import React, { Component } from 'react';

class UserItem extends Component<UserProps, object> {
  render() {
    return (
      <>
        <div className="user">
          <div className="user__title user__item">
            <p>Name:</p>
            {this.props.name}
          </div>
          <div className="user__file user__item">
            <p>File:</p>
            {this.props.avatar}
          </div>
          <div className="user__birth user__item">
            <p>Data:</p>
            {this.props.birth}
          </div>
          <div className="user__gender user__item">
            <p>Gender:</p>
            {this.props.gender}
          </div>
          <div className="user__coffee user__item">
            <p>Coffee:</p>
            Somebody {this.props.doesUserLikeCoffe ? 'wants' : 'doesnt want'} coffee
          </div>
        </div>
      </>
    );
  }
}

export default UserItem;
