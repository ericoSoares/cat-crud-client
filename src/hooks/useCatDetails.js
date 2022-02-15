import { useState, useEffect } from 'react';
import { getCatDetails } from '../services/catApi';

export const useCatDetails = (id) => {
  const [data, setData] = useState({});
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getCatDetails(id)
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [id]);

  return { data, error, loading };
};

export default useCatDetails;