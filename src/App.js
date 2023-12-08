import logo from "./logo.svg";

import styles from "./stylingModules/styles.module.css";


import {Form, SubmitForm} from "./components/Form";


import {
  Name,
  SurName,
  UserData,
  Counter,
  Profile,
  Resume,
  FuncitonEvent,
  ClassEvent,
  FunctionalCounter,
  LoopingExmaple,
  LoopingArrayOfObjects,
  
} from "./components/Hello";

import "./App.css";
const surName = "Mallempati";
let userData = {
  mobileNumber: "7207309296",
  email: "prathyushachowdary24@gmail.com",
};
function App() {
  const val = true;
  return (
    <div className={styles.title + ` App`}>
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <Name />
        <SurName surName={surName} />
        <UserData userData={userData} />
        <Counter></Counter>
        <Profile name="Prathyusha" surName={surName}></Profile>
        <Resume name="Prathyusha" surName={surName}></Resume>
        <FuncitonEvent></FuncitonEvent>
        <ClassEvent></ClassEvent>
        <FunctionalCounter />
        <LoopingExmaple/>
        <LoopingArrayOfObjects/>
        <Form/>
        <SubmitForm/>
      </header>
    </div>
  );
}

export default App;
