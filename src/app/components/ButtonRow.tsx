'use client';

import { Button, Flex } from '@mantine/core';
import { getRoute, postRouteToken } from '../api/api';
import { useAppContextHook } from '../context/AppContext';

const ButtonRow = () => {
  const { loading, setError, toggleLoading, setPathDetail, resetData } =
    useAppContextHook();

  const handleSubmitClick = async () => {
    toggleLoading();
    setError('');
    try {
      const response = await postRouteToken();
      if (response) {
        const { token } = response;
        try {
          const res = await getRoute(token);
          console.log({ res });
          if (res.status === 'failure') {
            console.log('in failure');
            setError(res.error);
            toggleLoading();
          } else if (res.status === 'success') {
            console.log('in success');
            setPathDetail({
              path: res.path,
              totalDistance: res.total_distance,
              totalTime: res.total_time,
            });
            toggleLoading();
          }
        } catch (error) {
          console.log('in error');
          setError('Internal Server Error');
          toggleLoading();
        }
      }
    } catch (error) {
      //* set error message
      console.log('set error');
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
