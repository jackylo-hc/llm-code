'use client';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { useCallback, useState } from 'react';

const center = {
  lat: 22.302711,
  lng: 114.177216,
};

const GoogleMapComp = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    //* just to ignore the typescript error without api key
    // @ts-ignore
    googleMapsApiKey: null, //* testing purpose only
  });
  return (
    isLoaded && (
      <GoogleMap
        mapContainerStyle={{ width: '100%', height: '512px' }}
        center={center}
        zoom={11}
      />
    )
  );
};

export default GoogleMapComp;
