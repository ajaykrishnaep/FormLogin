import React, { Component } from "react";
import Input from "../components/Input";
import Button from "../components/Button";

export default class Form1 extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: ""
    };
  }

  handleChange = e => {
    let value = e.target.value;
    let name = e.target.name;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    console.log("hii");
    e.preventDefault();
    let userData = this.state;

    fetch("http://144.202.111.131:3001/register", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    }).then(
      response => {
        response.json().then(data => {
          console.log({ successful: data });
        });
      },
      err => console.log("rejected", err)
    );
  };

  handleReset = () => {
    console.log("asds");
    this.setState({
      name: "",
      email: "",
      password: ""
    });
  };
  render() {
    return (
      <div>
        <Input
          type="text"
          name="name"
          placeholder="Username"
          value={this.state.name}
          task={this.handleChange}
        />

        <Input
          type="text"
          name="email"
          placeholder="Email"
          value={this.state.email}
          task={this.handleChange}
        />

        <Input
          type="password"
          name="password"
          placeholder="Password"
          value={this.state.password}
          task={this.handleChange}
        />

        <Button name="SUBMIT" onSubmit={this.handleSubmit} />
        <Button name="RESET" onSubmit={this.handleReset} />
      </div>
    );
  }
}
