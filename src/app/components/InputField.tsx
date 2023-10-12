'use client';
import { Autocomplete, Space } from '@mantine/core';
import { useAppContextHook } from '../context/AppContext';

//* just sample location for this code test, production should use real life location
//* location also should be in async
const sampleLocation = [
  'Innocenter',
  'Hong Kong Science Park',
  'Hong Kong International Airport Terminal 1',
];

export default function InputField() {
  const {
    startPoint,
    dropOffPoint,
    startPointError,
    dropOffPointError,
    setLocation,
  } = useAppContextHook();

  return (
    <>
      <Autocomplete
        value={startPoint}
        label='Starting location'
        data={sampleLocation}
        onChange={(value) => setLocation('start', value)}
        error={startPointError && 'Please input the starting location'}
      />
      <Space h={'xl'} />
      <Autocomplete
        value={dropOffPoint}
        label='Drop-off location'
        data={sampleLocation}
        onChange={(value) => setLocation('drop', value)}
        error={dropOffPointError && 'Please input the drop-off location'}
      />
    </>
  );
}
