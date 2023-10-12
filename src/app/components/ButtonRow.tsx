'use client';

import { Button, Flex } from '@mantine/core';
import { getRoute, postRouteToken } from '../api/api';
import { useAppContextHook } from '../context/AppContext';

const ButtonRow = () => {
  const {
    loading,
    startPoint,
    dropOffPoint,
    setError,
    toggleLoading,
    setPathDetail,
    setInputError,
    resetData,
  } = useAppContextHook();

  const handleSubmitClick = async () => {
    if (startPoint === '' || dropOffPoint === '') {
      if (startPoint === '') {
        setInputError('start', true);
      }
      if (dropOffPoint === '') {
        setInputError('drop', true);
      }
      return;
    } else {
      setInputError('start', false);
      setInputError('drop', false);
    }
    toggleLoading();
    setError('');
    try {
      const response = await postRouteToken();
      if (response) {
        const { token } = response;
        try {
          const res = await getRoute(token);
          if (res.status === 'failure') {
            setError(res.error);
            toggleLoading();
          } else if (res.status === 'success') {
            setPathDetail({
              path: res.path,
              totalDistance: res.total_distance,
              totalTime: res.total_time,
            });
            toggleLoading();
          }
        } catch (error) {
          setError('Internal Server Error');
          toggleLoading();
        }
      }
    } catch (error) {
      //* set error message
      setError('Internal Server Error');
      toggleLoading();
    }
  };

  const handleResetClick = () => {
    resetData();
  };
  return (
    <Flex>
      <Button mr={16} onClick={handleSubmitClick} loading={loading}>
        Submit
      </Button>
      <Button variant='default' onClick={handleResetClick}>
        Reset
      </Button>
    </Flex>
  );
};

export default ButtonRow;
