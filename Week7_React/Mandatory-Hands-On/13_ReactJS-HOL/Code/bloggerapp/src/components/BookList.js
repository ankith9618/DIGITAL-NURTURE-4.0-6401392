
import React from 'react';

export const BookList = ({ books, showPrices = true }) => {
  // Conditional rendering using element variable
  const priceSection = showPrices ? (
    books.map((book) => (
      <div key={book.id} style={{ marginBottom: '1rem' }}>
        <h3>{book.bname}</h3>
        <h4>{book.price}</h4>
      </div>
    ))
  ) : (
    <p>Prices are hidden.</p>
  );

  return <div>{priceSection}</div>;
};
