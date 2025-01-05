// src/components/ProgressTracker.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { backend } from '../context/api';

const ProgressTracker = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [notes, setNotes] = useState('');
  const [otherMeasurements, setOtherMeasurements] = useState('');
  const [progressLogs, setProgressLogs] = useState([]);
  const [error, setError] = useState('');

  // Fetch progress logs when the component is mounted
  useEffect(() => {
    axios
        .get(`http://localhost:5000/api/progress`,{
          headers: {
              Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
      })
        .then((response) => {
            setProgressLogs(response.data);
        })
        .catch((error) => {
            console.error("Error fetching logs:", error);
        });
}, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = { weight, height, notes, otherMeasurements };

    axios
      .post(`http://localhost:5000/api/progress`, data, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      })
      .then((res) => {
        setProgressLogs([res.data.newProgressLog, ...progressLogs]);
      })
      .catch((error) => {
        console.error("Error fetching logs:", error);
    });
  };

  return (
    <div className="progress-tracker">
      <h2>Track Your Progress</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Weight (kg)"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
        <input
          type="number"
          placeholder="Height (cm)"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
        <input
          type="text"
          placeholder="Notes"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
        <input
          type="text"
          placeholder="Other Measurements"
          value={otherMeasurements}
          onChange={(e) => setOtherMeasurements(e.target.value)}
        />
        <button type="submit">Add Progress</button>
      </form>

      {error && <div>{error}</div>}

      <h3>Your Progress Logs</h3>
      <ul>
        {progressLogs.map((log) => (
          <li key={log._id}>
            <strong>Weight:</strong> {log.weight}kg, <strong>Height:</strong> {log.height}cm, <strong>Notes:</strong> {log.notes}, <strong>Other Measurements:</strong> {log.otherMeasurements}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProgressTracker;
