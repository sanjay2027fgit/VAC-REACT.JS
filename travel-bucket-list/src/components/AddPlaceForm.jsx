import { useState } from 'react';

export default function AddPlaceForm({ onAdd }) {
  const [place, setPlace] = useState('');
  const [lat, setLat] = useState('');
  const [lng, setLng] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!place || !lat || !lng) return;
    onAdd({ name: place, lat: parseFloat(lat), lng: parseFloat(lng) });
    setPlace('');
    setLat('');
    setLng('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={place} onChange={(e) => setPlace(e.target.value)} placeholder="Place Name" />
      <input value={lat} onChange={(e) => setLat(e.target.value)} placeholder="Latitude" />
      <input value={lng} onChange={(e) => setLng(e.target.value)} placeholder="Longitude" />
      <button type="submit">Add</button>
    </form>
  );
}
