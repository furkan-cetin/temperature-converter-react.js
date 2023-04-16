import React, { Component } from "react";
export default class C extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h6>
          {this.props.cFull.title} {this.props.cFull.level} {}
        </h6>
      </div>
    );
  }
}
