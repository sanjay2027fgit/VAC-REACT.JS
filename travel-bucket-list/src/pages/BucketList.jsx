import { useState } from 'react';
import AddPlaceForm from '../components/AddPlaceForm';
import MapComponent from '../components/MapComponent';
import './BucketList.css';

export default function BucketList() {
  const [places, setPlaces] = useState([]);

  const addPlace = (place) => {
    if (place && place.name && place.lat && place.lng) {
      setPlaces([...places, { ...place, visited: false }]);
    }
  };

  const toggleVisited = (index) => {
    const updated = [...places];
    updated[index].visited = !updated[index].visited;
    setPlaces(updated);
  };

  const deletePlace = (index) => {
    const updated = [...places];
    updated.splice(index, 1);
    setPlaces(updated);
  };

  return (
    <div className="bucket-container">
      <div className="top-section">
        <h2>📍 Your Travel Bucket List</h2>
        <AddPlaceForm onAdd={addPlace} />
      </div>

      <div className="bottom-section">
        <div className="map-section">
          <MapComponent places={places} />
        </div>
        <div className="places-list">
          {places.map((place, index) => (
            <div
              key={index}
              className={`place-card ${place.visited ? 'visited' : ''}`}
            >
              <h3>{place.name}</h3>
              <div className="actions">
                <button onClick={() => toggleVisited(index)}>
                  {place.visited ? '✅' : '✔️'}
                </button>
                <button onClick={() => deletePlace(index)}>🗑</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
