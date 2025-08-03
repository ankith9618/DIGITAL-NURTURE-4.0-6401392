import React from 'react';

const SyntheticEvent = () => {
  const handleClick = (e) => {
    e.preventDefault(); // shows it's a synthetic event
    alert("I was clicked");
  };

  return (
    <div>
      <button onClick={handleClick}>Click on me</button>
    </div>
  );
};

export default SyntheticEvent;
