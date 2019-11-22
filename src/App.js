import React from "react";

import Person from "./Person";
import "./styles.css";

class App extends React.Component {
  state = {
    Person: [
      { name: "Ajay", age: 21 },
      { name: "Harshada", age: 20 },
      { name: "Disha", age: 22 },
      { name: "Kunal", age: 21 },
      { name: "Iyer", age: 24 }
    ],
    changePerson: true
  };

  handleClick = val => {
    this.setState({
      Person: [
        { name: val, age: 40 },
        { name: "Harshada", age: 30 },
        { name: "Disha", age: 32 },
        { name: "Kunal", age: 31 },
        { name: "Iyer", age: 64 }
      ]
    });
  };

  HandleNameChange = event => {
    this.setState({
      Person: [
        { name: "Ajay", age: 40 },
        { name: "Harshada", age: 30 },
        { name: event.target.value, age: 32 },
        { name: "Kunal", age: 31 },
        { name: "Iyer", age: 64 }
      ]
    });
  };

  handleToggle = () => {
    console.log(this.state.changePerson);
    const value = this.state.changePerson;
    this.setState({ changePerson: !value });
    console.log(this.state.changePerson);
  };

  render() {
    return (
      <div>
        <button className="bt" onClick={() => this.handleToggle()}>
          Toggle
        </button>
        {console.log("if " + this.state.changePerson)}
        {this.state.changePerson ? (
          <div>
            <Person
              name={this.state.Person[0].name}
              age={this.state.Person[0].age}
            />

            <Person
              click={() => this.handleClick("Akash")}
              name={this.state.Person[4].name}
              age={this.state.Person[4].age}
            />

            <Person
              change={this.HandleNameChange}
              name={this.state.Person[2].name}
              age={this.state.Person[2].age}
            />

            <center>
              <button className="bt" onClick={() => this.handleClick("Tiwari")}>
                Click
              </button>
            </center>
          </div>
        ) : null}
      </div>
    );
  }
}
export default App;
