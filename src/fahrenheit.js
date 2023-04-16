import React, { Component } from "react";
export default class F extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h6>
          {this.props.fFull.title} {this.props.fFull.level}
        </h6>
      </div>
    );
  }
}
