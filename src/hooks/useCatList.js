import {useState, useEffect} from 'react';
import { getCats } from '../services/catApiMock';

export const useCatList = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    /* fetch(url)
      .then(response => response.json())
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false)); */
    setData(getCats());
  }, []);

  return { data, error, loading };
};

export default useCatList;

