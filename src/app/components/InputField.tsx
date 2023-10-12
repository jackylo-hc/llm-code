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
  const { startPoint, dropOffPoint, setLocation } = useAppContextHook();

  return (
    <>
      <Autocomplete
        value={startPoint}
        label='Starting location'
        data={sampleLocation}
        onChange={(value) => setLocation('start', value)}
      />
      <Space h={'xl'} />
      <Autocomplete
        value={dropOffPoint}
        label='Starting location'
        data={sampleLocation}
        onChange={(value) => setLocation('drop', value)}
      />
    </>
  );
}
