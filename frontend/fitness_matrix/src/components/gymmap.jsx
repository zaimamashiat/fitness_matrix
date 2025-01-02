{/*
  Heads up! 👋

  Plugins:
    - @tailwindcss/forms
*/}

import React, { useState, useRef } from "react";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const gyms = [
  { name: "Muscle Mania Gym", location: "Q9Q5+X8 Dhaka", coords: [23.8103, 90.4120] },
  { name: "Fitness World", location: "Q9RG+46 Dhaka", coords: [23.8110, 90.4128] },
  { name: "Health Hub", location: "Q9Q7+CX Dhaka", coords: [23.8120, 90.4136] },
  { name: "Elite Gym", location: "Q968+3W Dhaka", coords: [23.8130, 90.4144] },
  { name: "Pro Fit Center", location: "Q975+4J Dhaka", coords: [23.8140, 90.4152] },
];

function MapUpdater({ coords }) {
  const map = useMap();
  map.setView(coords, 15);
  return null;
}

export default function GymFinder() {
  const [selectedGym, setSelectedGym] = useState(null);

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg">
        <h1 className="text-center text-2xl font-bold text-teal-500 sm:text-3xl">Gym Finder</h1>

        <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
          Select a gym from the dropdown to view its location on the map.
        </p>

        <div className="mt-6">
          <label htmlFor="gym" className="block text-sm font-medium text-gray-700">
            Select Gym
          </label>
          <select
            id="gym"
            className="block w-full rounded-lg border-gray-200 p-2 text-sm shadow-sm"
            onChange={(e) => {
              const selected = gyms.find((gym) => gym.name === e.target.value);
              setSelectedGym(selected);
            }}
          >
            <option value="">Choose a gym</option>
            {gyms.map((gym) => (
              <option key={gym.name} value={gym.name}>
                {gym.name}
              </option>
            ))}
          </select>
        </div>

        {selectedGym && (
          <div className="mt-8">
            <MapContainer
              center={selectedGym.coords}
              zoom={15}
              style={{ height: "400px", width: "100%" }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
              />
              <Marker position={selectedGym.coords}></Marker>
              <MapUpdater coords={selectedGym.coords} />
            </MapContainer>
          </div>
        )}
      </div>
    </div>
  );
}
