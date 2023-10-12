export const postRouteToken = async () => {
  return fetch('http://localhost:8080/mock/route/success', {
    method: 'POST',
  })
    .then((response) => response.json())
    .catch((error) => {
      throw new Error(error);
    });
};

export const getRoute = async (token: string) => {
  return fetch(`http://localhost:8080/route/${token}`, {
    method: 'GET',
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (data.status === 'in progress') {
        console.log('retry');
        throw new Error('in progress');
      }
      return data;
    })
    .catch((error) => {
      if (error.message === 'in progress') {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve(getRoute(token));
          }, 2000);
        });
      } else {
        throw new Error(error);
      }
    });
};
