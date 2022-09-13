import React, { Component } from "react";

export default class HandleEvent extends Component {
  handleClick = (event) => {
    // alert('say hello!');
    console.log(event.target.className);
    event.target.className = "btn btn-danger";
    event.target.innerHTML = "Button danger";
  };

  showMessage = (name) => {
    alert('Hello ' + name);
  }

  render() {

    return (
      <div className="container">
        <button id="btn" className="btn btn-dark" onClick={this.handleClick}>
          Say hello{" "}
        </button>

        <button id="btn" className="btn btn-dark mx-2" onClick={(e) => {
            //Gọi nhiều hàm trong đây
            this.showMessage('Quách Khải');
            e.target.innerHTML = 'Hi ! Quách Khải';
        }}>
          Hi !
        </button>
      </div>
    );
  }
}
