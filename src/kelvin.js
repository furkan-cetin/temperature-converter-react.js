import React, { Component } from "react";
export default class K extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h6>
          {this.props.kFull.title} {this.props.kFull.level}
        </h6>
      </div>
    );
  }
}
