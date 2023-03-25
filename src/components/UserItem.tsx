import React, { Component } from 'react';

class UserItem extends Component<UserProps, object> {
  render() {
    return (
      <>
        <div className="card">
          <h3 className="card__title">{this.props.name}</h3>
          <div>фото</div>
          <h5 className="card__birth">{this.props.birth}</h5>
          <div className="card__gender">{this.props.gender}</div>
          <div className="card__coffee">This user {this.props.doesUserLikeCoffe} coffee</div>
        </div>
      </>
    );
  }
}

export default UserItem;
