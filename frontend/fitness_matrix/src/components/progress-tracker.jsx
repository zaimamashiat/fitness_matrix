import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {backend} from "../context/api";

const ProgressLog = () => {
  const [userId, setUserId] = useState('user123'); // Mocked user ID
  const [logs, setLogs] = useState([]);
  const [formData, setFormData] = useState({
    weight: '',
    height: '',
    notes: '',
  });

  const API_URL = `${backend}/progress-logs`; // Update with your backend URL

  // Get token from localStorage
  const authToken = localStorage.getItem('authToken');

  // Fetch progress logs for the user
  const fetchLogs = async () => {
    try {
      const response = await axios.get(`${API_URL}/`, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
      setLogs(response.data);
    } catch (error) {
      console.error('Error fetching logs:', error.message);
    }
  };

  // Create a new progress log
  const createLog = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        API_URL,
        { formData },
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );
      setLogs([...logs, response.data]);
      setFormData({ weight: '', height: '', notes: '' });
    } catch (error) {
      console.error('Error creating log:', error.message);
    }
  };

  // Delete a progress log
  const deleteLog = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
      setLogs(logs.filter((log) => log._id !== id));
    } catch (error) {
      console.error('Error deleting log:', error.message);
    }
  };

  useEffect(() => {
    fetchLogs();
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-center mb-6">Progress Logs</h1>

      {/* User ID Input */}
      <div className="flex flex-col items-center mb-6">
        <label className="mb-2 text-lg">User ID:</label>
        <input
          type="text"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          className="border border-gray-300 rounded px-4 py-2 w-64 mb-4"
        />
        <button
          onClick={fetchLogs}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Fetch Logs
        </button>
      </div>

      {/* Create New Log Form */}
      <form
        onSubmit={createLog}
        className="max-w-lg mx-auto bg-white p-6 rounded shadow-md"
      >
        <h2 className="text-lg font-semibold mb-4">Create New Log</h2>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Weight (kg):</label>
          <input
            type="number"
            value={formData.weight}
            onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
            required
            className="w-full border border-gray-300 rounded px-4 py-2"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Height (cm):</label>
          <input
            type="number"
            value={formData.height}
            onChange={(e) => setFormData({ ...formData, height: e.target.value })}
            required
            className="w-full border border-gray-300 rounded px-4 py-2"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Notes:</label>
          <textarea
            value={formData.notes}
            onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
            className="w-full border border-gray-300 rounded px-4 py-2"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add Log
        </button>
      </form>

      {/* Progress Logs Table */}
      <div className="mt-8 max-w-4xl mx-auto">
        <h2 className="text-lg font-semibold mb-4">Your Logs</h2>
        <table className="w-full border-collapse bg-white shadow-md rounded">
          <thead className="bg-blue-500 text-white">
            <tr>
              <th className="px-4 py-2 text-left">Date</th>
              <th className="px-4 py-2 text-left">Weight (kg)</th>
              <th className="px-4 py-2 text-left">Height (cm)</th>
              <th className="px-4 py-2 text-left">Notes</th>
              <th className="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {logs.map((log) => (
              <tr
                key={log._id}
                className="border-t hover:bg-gray-100 transition"
              >
                <td className="px-4 py-2">
                  {new Date(log.dateOfCreation).toLocaleDateString()}
                </td>
                <td className="px-4 py-2">{log.weight}</td>
                <td className="px-4 py-2">{log.height}</td>
                <td className="px-4 py-2">{log.notes}</td>
                <td className="px-4 py-2">
                  <button
                    onClick={() => deleteLog(log._id)}
                    className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProgressLog;
