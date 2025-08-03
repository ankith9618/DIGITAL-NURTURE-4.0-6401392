
import React, { useState } from 'react';
import './App.css';
import { books, blogPosts, courses } from './data';
import { BookDetails } from './components/BookDetails';
import { BlogDetails } from './components/BlogDetails';
import { CourseDetails } from './components/CourseDetails';

function App() {
 
  const [showBooks, setShowBooks] = useState(true);
  const [selectedBlogId, setSelectedBlogId] = useState(1);

  return (
    <div className="container">
      <div className="toggle-bar">
        <button onClick={() => setShowBooks((s) => !s)}>
          {showBooks ? 'Hide' : 'Show'} Books
        </button>
        <button onClick={() => setSelectedBlogId((id) => (id === 1 ? 2 : 1))}>
          Toggle Blog Post
        </button>
      </div>

      <div className="columns">
        <div className="col">
          <BookDetails books={books} showSection={showBooks} />
        </div>
        <div className="col">
          <BlogDetails posts={blogPosts} selectedId={selectedBlogId} />
        </div>
        <div className="col">
          <CourseDetails courses={courses}/>
        </div>
      </div>
    </div>
  );
}

export default App;
