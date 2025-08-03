
import React from 'react';

export const BlogDetails = ({ posts, selectedId }) => {
  const selected = posts.find((p) => p.id === selectedId);

  return (
    <div className="section">
      <h1>Blog Details</h1>
      {selected ? (
        <>
          <h2>{selected.title}</h2>
          <h4>{selected.author}</h4>
          <p>{selected.content}</p>
        </>
      ) : (
        <p>Please select a blog post.</p>
      )}
    </div>
  );
};
