'use client';

import { Text } from '@mantine/core';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
export default function ErrorMessage() {
  const context = useContext(AppContext);

  return (
    <Text size='sm' c={'red'} mt={8}>
      {context.state.error}
    </Text>
  );
}
