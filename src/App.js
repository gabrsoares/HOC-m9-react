import React, { useState } from 'react';
import FormAccount from './Components/FormAccount/FormAccount';
import FormProduct from './Components/FormProduct/FormProduct';
import './App.css';

function App() {
  const [isEmpty, setIsEmpty] = useState(false)
  const [isEqual, setIsEqual] = useState(true)

  return (
    <div className="App">
      <FormAccount setIsEmpty={setIsEmpty} setIsEqual={setIsEqual}/>
      <p>{isEmpty? "Preencha todos os campos!": ""}</p>
      <p>{!isEqual? "As senhas não coincidem!": ""}</p>
      <FormProduct setIsEmpty={setIsEmpty} />
    </div>
  );
}

export default App;
