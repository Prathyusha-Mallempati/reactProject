import { Component, useState } from "react";

// export function Name() {
//   return <h1>Prathyusha</h1>;
// }

//functional component
export const Name = () => {
  return <h1>Prathyusha </h1>;
};

export function SurName(props) {
  console.log(props);
  return <h6> Surname: {props.surName} </h6>;
}

//class based component
export class UserData extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <div> Mobile Number: {this.props.userData.mobileNumber}</div>
        <div>Email: {this.props.userData.email}</div>
      </div>
    );
  }
}

//Using state in class based component
export class Counter extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }

  increment() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }
  render() {
    return (
      <div>
        <h3>Count value is {this.state.counter}</h3>
        <button onClick={() => this.increment()}>Increment</button>
      </div>
    );
  }
}
//onClick is a JSX attribute

//Destructing props in functional component

export function Profile(props) {
  const { name, surName } = props; // destructing props
  return (
    <div>
      <h1>{name}</h1>
      <h2>{surName}</h2>
    </div>
  );
}

// Destructing props in class based component
export class Resume extends Component {
  render() {
    const { name, surName } = this.props;
    return (
      <div>
        <div>{name}</div>
        <div>{surName}</div>
      </div>
    );
  }
}

// Event handling in functional event
export function FuncitonEvent() {
  function handleClick() {
    console.log("Button clicked");
  }
  const buttonClick = () => {
    console.log("Clicked");
  };
  return (
    <div>
      Functional component
      <button onClick={buttonClick}>click me</button>
    </div>
  );
}

// Event hadnling in class

export class ClassEvent extends Component {
  buttonClick = () => {
    console.log("Clickedd");
  };
  render() {
    return <button onClick={this.buttonClick}>click me class</button>;
  }
}

// Using state in functional component
export function FunctionalCounter() {
  let [counter, setCounter] = useState(0);
  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };
  return (
    <div>
      <div>counter: {counter}</div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

//looping
export function LoopingExmaple() {
  const products = ["Apple", "Banana", "Citrus"];
  const productList = products.map((item, index) => (
    <h3 key={index}>{item}</h3>
  ));
  return <div>{productList}</div>;
}

//looping array of objects

export function LoopingArrayOfObjects() {
  const products = [
    { id: 1, name: "apple", price: 200 },
    { id: 2, name: "Banana", price: 300 },
    { id: 3, name: "Cabbage", price: 400 },
  ];

  const productsList = products.map((item,index)=>(
    <div key={index}>{item.name}</div>
  ))
const style = {color:'green'}
  return (
    <div  style={style}>
      {productsList}
    </div>
  )
}
