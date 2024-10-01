import React from 'react';
import ButtonClassComponent from './ButtonClassComponent';
import ButtonFunctionalComponent from './ButtonFunctionalComponent';

function App() {
  return (
    <div>
      <h1>Task 1: Render Buttons</h1>
      <h1>Button as Class Component : </h1>
      <ButtonClassComponent />
      <h1>Button as Functional Component :</h1>
      <ButtonFunctionalComponent />
    </div>
  );
}

export default App;
