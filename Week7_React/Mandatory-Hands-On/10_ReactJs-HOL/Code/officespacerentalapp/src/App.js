import React from 'react';
import './App.css';
import officeImage1 from './images/office1.png'; // ensure this image exists in /src or /public
import officeImage2 from  './images/office2.png';
import officeImage3 from  './images/office3.png';
function App() {
  const heading = "Office Space";

  const officeList = [
    { Name: "DBS", Rent: 50000, Address: "Chennai" ,Image:officeImage1},
    { Name: "WeWork", Rent: 65000, Address: "Bangalore" ,Image : officeImage2},
    { Name: "Regus", Rent: 45000, Address: "Hyderabad" ,Image:officeImage3}
  ];

  return (
    <div className="App">
      <h1>{heading} , at Affordable Range</h1>
      {officeList.map((item, index) => {
        const colorClass = item.Rent <= 60000 ? "textRed" : "textGreen";
        return (
          <div key={index} style={{ marginBottom: '30px' }} className='item'>
            <img src={item.Image} alt="Office Space" width="25%" height="25%" />
            <h1>Name: {item.Name}</h1>
            <h3 className={colorClass}>Rent: Rs. {item.Rent}</h3>
            <h3>Address: {item.Address}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default App;