import { useState,useEffect } from 'react';
import Places from './Places.jsx';
import Error from './Error.jsx';

export default function AvailablePlaces({ onSelectPlace }) {
  const [isLoading, setIsLoading] = useState(true);
  const [availablePlaces, setAvailablePlaces]=useState([]);
  const[error,setError]=useState();
 useEffect(()=>{
  const fetchPlaces = async () => {
    setIsLoading(true);
try{
   const res = await fetch("http://localhost:3000/places");
    const data = await res.json();
    if (!res.ok){
     throw new Error("Failed to fetch places");
    }
    setAvailablePlaces(data.places);
}catch(error){
  setError({message:error.message|| 'Something went wrong!Please try again later.'});
}

    setIsLoading(false);
  }
 fetchPlaces();
 },[]);


if (error){
  return <Error title=" AN ERROR OCCURRED!" message={error.message} />
}

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