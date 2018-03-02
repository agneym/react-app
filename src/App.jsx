/* eslint-disable */
import React, { Component } from "react";
import "whatwg-fetch";

class App extends Component {
  componentDidMount() {
    const request = this.props.query();
    request.then(res => {
      this.props.onSearchClicked();
      this.setState({
        data: res
      });
      console.log(res);
    });
  }
  constructor(props) {
    super(props);
    this.state = {
      data: ""
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event) {
    event.preventDefault();
  }
  render() {
    return (
      <div>
        <p>App</p>
        <button onClick={this.handleClick}>Click</button>
      </div>
    );
  }
}
export default App;
