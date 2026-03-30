import { useState,useEffect } from 'react';
import Places from './Places.jsx';

export default function AvailablePlaces({ onSelectPlace }) {
  const [isLoading, setIsLoading] = useState(true);
  const [availablePlaces, setAvailablePlaces]=useState([]);
 useEffect(()=>{
  const fetchPlaces = async () => {
    setIsLoading(true);

    const res = await fetch("http://localhost:3000/places");
    const data = await res.json();
    setAvailablePlaces(data.places);
    setIsLoading(false);
  }
 fetchPlaces();
 },[]);



  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isLoading}
      LoadingText ="Loading available Places..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}