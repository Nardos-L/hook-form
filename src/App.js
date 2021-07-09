import React, { useState } from 'react';
import Form from './components/Form';
import Results from './components/Results'
import './App.css';

function App() {
  const [state, setState] = useState({
    firstName: "", //name should match the name in the input fields
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  return (
    <div className="App">
      <Form inputs={state} setInputs={setState} />
      <Results data={state} />
    </div>
  );
}
export default App;
