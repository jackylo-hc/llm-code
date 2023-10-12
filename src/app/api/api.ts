export const postRouteToken = async () => {
  return fetch('https://mock-api.dev.lalamove.com/mock/route/success', {
    method: 'POST',
  })
    .then((response) => response.json())
    .catch((error) => {
      throw new Error(error);
    });
};

export const getRoute = async (token: string) => {
  return fetch(`https://mock-api.dev.lalamove.com/route/${token}`, {
    method: 'GET',
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.status === 'in progress') {
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
