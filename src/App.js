import React from "react";
import Wrapper from "./components/Wrapper";
import NavBar from "./components/Navbar/Navbar";
import FormWrapper from "./components/FormWrapper";
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Wrapper>
        <NavBar />
        <FormWrapper />
      </Wrapper>
    </div>
  );
}

export default App;
