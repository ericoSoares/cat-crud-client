import { useState, useEffect } from 'react';
import { getCats } from '../services/catApi';

export const useCatList = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getCats()
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
    /* fetch(url)
      .then(response => response.json())
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false)); */
  }, []);

  return { data, error, loading };
};

export default useCatList;

