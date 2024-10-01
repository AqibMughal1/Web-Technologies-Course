import React, { Component } from 'react';

class ButtonClassComponent extends Component {
  handleClick = (buttonName) => {
    alert(buttonName);
  };

  render() {
    return (
      <div>
        <button onClick={() => this.handleClick('Create')}>Create</button>
        <button onClick={() => this.handleClick('Update')}>Update</button>
        <button onClick={() => this.handleClick('Delete')}>Delete</button>
      </div>
    );
  }
}

export default ButtonClassComponent;
