// src/TrainerDetails.js

import React, { Component } from 'react';
import { useParams } from 'react-router-dom';
import trainers from './TrainersMock';

class TrainerDetailsClass extends Component {
  render() {
    const { id } = this.props;
    const trainer = trainers.find(t => t.trainerId === id); // string comparison

    if (!trainer) return <p>Trainer not found</p>;

    return (
      <div style={{ padding: '20px', fontFamily: 'Arial' }}>
        <h2>Trainers Details</h2>
        <p>
          <strong>{trainer.name} ({trainer.technology})</strong>
        </p>
        <p>{trainer.email}</p>
        <p>{trainer.phone}</p>
        <ul>
          {trainer.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    );
  }
}

// Wrapper for useParams (since hooks don't work in class components)
function TrainerDetailWrapper() {
  const { id } = useParams();
  return <TrainerDetailsClass id={id} />;
}

export default TrainerDetailWrapper;
