import { Component } from "react";

export class Form extends Component {
  state = {
    surName: "",
    list: [],
  };

  updateName = (event) => {
    this.setState({
      surName: event.target.value,
    });
    console.log(this.state.surName);
  };

  addToList = () => {
    this.setState({
      list: this.state.list.concat(this.state.surName),
      surName: "",
    });
  };

  render() {
    const listData = this.state.list.map((item, index) => (
      <h3 key={index}>{item}</h3>
    ));
    return (
      <div>
        {/* <input defaultValue="Name"></input> */}
        <input value={this.state.surName} onChange={this.updateName}></input>
        <button onClick={this.addToList}>Add</button>
        <div>{listData}</div>
      </div>
    );
  }
}

// Form submit

export class SubmitForm extends Component {
  state = {
    firstName: "",
    lastName: "",
  };
  firstNameChange = (event) => {
    this.setState({
      firstName: event.target.value,
    });
  };

  lastNameChange = (event) => {
    this.setState({
      lastName: event.target.value,
    });
  };
  formSubmit = (event) => {
    event.preventDefault();
    console.log(this.state)
  };
  render() {
    return (
      <div>
        form
        <form onSubmit={this.formSubmit}>
          <input
            value={this.state.firstName}
            onChange={this.firstNameChange}
          ></input>
          <input
            value={this.state.lastName}
            onChange={this.lastNameChange}
          ></input>
          <button type="submit"> Submit</button>
        </form>
      </div>
    );
  }
}
