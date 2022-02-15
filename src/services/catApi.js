import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_API_URL + 'cats/',
  timeout: 10000
});

const getCatTemplate = () => {
  return { id: undefined, name: '', birthday: '', breed: '', description: '', picture: '' }
}

const getCats = async () => {
  let response = await api.get();
  return [...response.data.results];
}

const getCatDetails = async (id) => {
  if (id === 'undefined') return getCatTemplate();
  let response = await api.get(`/${id}`);
  if (response.data) return { ...response.data };

  return getCatTemplate();
}

const createCat = (cat) => {
  return api.post('/', cat);
}

const updateCat = (id, cat) => {
  delete cat.id;
  return api.patch(`/${id}`, cat);
}

const deleteCat = (id) => {
  return api.delete(`/${id}`);
}

export {
  getCatTemplate, getCats, getCatDetails, createCat, updateCat, deleteCat
}