// src/TrainerList.js

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class TrainerList extends Component {
  render() {
    const { trainers } = this.props;

    return (
      <div>
        <h2>Trainers List</h2>
        <ul>
          {trainers.map(trainer => (
            <li key={trainer.trainerId}>
              <Link to={`/trainer/${trainer.trainerId}`}>{trainer.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TrainerList;
