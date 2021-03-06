import * as React from "react";
 
import { useGoogleMaps } from "react-hook-google-maps";
 
const Map = () => {

  const cords = [{ lat: 40.672827, lng: 22.916622 },
    { lat: 40.622031, lng: 22.975845 },
    { lat: 40.659545, lng: 22.991638 },
    { lat: 40.642615, lng: 22.915421 },
    { lat: 40.634538, lng: 22.937737 },];

  const { ref, map, google } = useGoogleMaps(
    
    "AIzaSyBF4By3E2z7nCp1Yb4zNzH-yJRfq_VDQNM",
  
    {
      
      center: { lat: 40.629269, lng: 22.947412},
      zoom: 12,
    },
  );

  if (map) {
    cords.forEach(cord=>{
      new google.maps.Marker({ position: cord, map });
    })
    
  }
 
  return (
  
      <div ref={ref} style={{ width: "100%", height: "90%" }} />
    
  );
};
 
export default Map;
