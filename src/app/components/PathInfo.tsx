'use client';
import { SimpleGrid } from '@mantine/core';
import { useAppContextHook } from '../context/AppContext';

export default function PathInfo() {
  const { totalDistance, totalTime } = useAppContextHook();
  return (
    totalDistance !== 0 &&
    totalTime !== 0 && (
      <SimpleGrid w={224} cols={2} spacing={'xs'}>
        <div>Total distance:</div>
        <div>{totalDistance}</div>
        <div>Total time:</div>
        <div>{totalTime}</div>
      </SimpleGrid>
    )
  );
}
