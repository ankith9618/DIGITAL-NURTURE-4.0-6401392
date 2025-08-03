import React, { useState } from 'react';

const CurrencyConverter = () => {
  const [rupees, setRupees] = useState('');
  const [euro, setEuro] = useState(null);
  const euroRate = 0.01; 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isNaN(rupees) && rupees !== '') {
      setEuro((rupees * euroRate).toFixed(2));
    } else {
      alert("Enter valid number");
    }
  };

  return (
    <div>
      <h3 style={{'color':'green'}}> Currency Converter!!!</h3>
      <form onSubmit={handleSubmit}>
        <label >Amount: </label>
        <input
          type="text"
          value={rupees}
          onChange={(e) => setRupees(e.target.value)}
        />
        <br/>
        <label>Currency: </label>
        <input
            type='text'
            value={euro}
        />
        <br/>
        <button type="submit">Convert</button>
      </form>
    </div>
  );
};

export default CurrencyConverter;
