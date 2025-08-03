import React from 'react';
import Counter from './components/Counter';
import SayWelcome from './components/SayWelcome';
import SyntheticEvent from './components/SyntheticEvent';
import CurrencyConverter from './components/CurrencyConverter';

function App() {
  return (
    <div className="App">
      <Counter />
      <SayWelcome />
      <SyntheticEvent />
      <CurrencyConverter />
    </div>
  );
}

export default App;
