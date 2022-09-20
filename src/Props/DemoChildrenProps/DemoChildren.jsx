import React, { Component } from 'react'

export default class DemoChildren extends Component {
  render() {
    const {children,element,func} = this.props;

    console.log(children);
    return (
      <div>
        {/* {children[1]} */}
        {element}
        {func()}


      </div>
    )
  }
}
