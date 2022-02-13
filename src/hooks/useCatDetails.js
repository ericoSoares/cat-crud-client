import { useState, useEffect } from 'react';
import { getCatDetails } from '../services/catApiMock';

export const useCatDetails = (id) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    /* fetch(url)
      .then(response => response.json())
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false)); */
    setData(getCatDetails(parseInt(id)));
  }, [id]);

  return { data, error, loading };
};

export default useCatDetails;