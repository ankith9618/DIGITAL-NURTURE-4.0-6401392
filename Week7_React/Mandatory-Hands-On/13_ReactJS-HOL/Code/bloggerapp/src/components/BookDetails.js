
import React from 'react';
import { BookList } from './BookList';

export const BookDetails = ({ books, showSection }) => {
  return (
    <div className="section">
      <h1>Book Details</h1>
      {showSection ? (
        <BookList books={books} showPrices={true} />
      ) : (
        <p>No books to display.</p>
      )}
    </div>
  );
};
