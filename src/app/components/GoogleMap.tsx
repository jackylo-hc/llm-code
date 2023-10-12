'use client';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { useCallback, useEffect, useState } from 'react';
import { useAppContextHook } from '../context/AppContext';

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
  const [map, setMap] = useState<google.maps.Map>();
  const [storeRoute, setStoreRoute] = useState<google.maps.Polyline>();
  const onLoad = useCallback(function callback(map: google.maps.Map) {
    setMap(map);
  }, []);
  const { path } = useAppContextHook();

  useEffect(() => {
    if (map && path && path.length > 0) {
      const routeCoordinates = path.reduce((acc, item) => {
        const _acc = [...acc];
        _acc.push({ lat: parseFloat(item[0]), lng: parseFloat(item[1]) });
        return _acc;
      }, [] as { lat: number; lng: number }[]);

      const routePath = new google.maps.Polyline({
        path: routeCoordinates,
        geodesic: true,
        strokeColor: '#FF0000',
        strokeOpacity: 1.0,
        strokeWeight: 3,
      });
      setStoreRoute(routePath);
      routePath.setMap(map);
    } else if (map && path && path.length === 0) {
      storeRoute?.setMap(null);
    }
  }, [map, path]);

  return (
    isLoaded && (
      <GoogleMap
        mapContainerStyle={{ width: '100%', height: '512px' }}
        center={center}
        zoom={11}
        onLoad={onLoad}
      />
    )
  );
};

export default GoogleMapComp;
