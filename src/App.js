//Hooks
import { useState } from 'react';

//Components
import Form from './components/Form';
import Foods from './components/Foods';

function App() {
  //States
  const [people, setPeople] = useState({ adults: 0, children: 0 });

  //Calculate
  const onCalc = (people) => {
    setPeople(people);
  }
  return (
    <div className="container">
      <h1>Calculadora de Churrrrrrasco</h1>
      <Form className="form" onCalc={onCalc} />
      <Foods className="foods" people={people} />

    </div>
  );
}

export default App;
