import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const BAD_REQUEST_STATUS = 400;

function useLoginValidator(errorStatus) {
  const history = useHistory();

  useEffect(() => {
    const user = localStorage.getItem('user');

    if (!user || errorStatus === BAD_REQUEST_STATUS) {
      localStorage.removeItem('user');
      history.push('/');
    }
  }, [errorStatus]);
}

export default useLoginValidator;
