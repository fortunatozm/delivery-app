import { useEffect, useState } from 'react';
import requests, { setTokenHeaders } from '../services/requests';

function useApiGet(request, params) {
  const [data, setData] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const [errorStatus, setErrorStatus] = useState(0);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) setTokenHeaders(user.token);

    requests.get[request](params)
      .then((response) => setData(response))
      .catch((error) => setErrorStatus(error.response.status))
      .finally(() => setIsFetching(false));
  }, []);

  return { data, errorStatus, isFetching };
}

export default useApiGet;
