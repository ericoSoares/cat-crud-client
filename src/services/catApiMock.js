let mockCats = [
  { id: 1, name: 'Cat 1', birthday: '01/01/2021', breed: 'Orange', description: 'An orange cat', location: { lat: -29.73724512450304, lng: -52.447317772681295 }, picture: 'https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=49ed3252c0b2ffb49cf8b508892e452d' },
  { id: 2, name: 'Cat 2', birthday: '01/01/2021', breed: 'Orange', description: 'An orange cat', location: { lat: -29.737549718569728, lng: -52.4515214016598 }, picture: 'https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=49ed3252c0b2ffb49cf8b508892e452d' },
  { id: 3, name: 'Cat 3', birthday: '01/01/2021', breed: 'Orange', description: 'An orange cat', location: { lat: -29.73642498747632, lng: -52.454615614466896 }, picture: 'https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=49ed3252c0b2ffb49cf8b508892e452d' },
  { id: 4, name: 'Cat 4', birthday: '01/01/2021', breed: 'Orange', description: 'An orange cat', location: { lat: -29.7371204036376, lng: -52.44745935904354 }, picture: 'https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=49ed3252c0b2ffb49cf8b508892e452d' },
  { id: 5, name: 'Cat 5', birthday: '01/01/2021', breed: 'Orange', description: 'An orange cat', location: { lat: -29.736873310716714, lng: -52.4502160943066 }, picture: 'https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=49ed3252c0b2ffb49cf8b508892e452d' },
  { id: 6, name: 'Cat 6', birthday: '01/01/2021', breed: 'Orange', description: 'An orange cat', location: { lat: -29.736580415097926, lng: -52.44588754617495 }, picture: 'https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=49ed3252c0b2ffb49cf8b508892e452d' }
]

const getCatTemplate = () => {
  return { id: undefined, name: '', birthday: '', breed: '', description: '', picture: '' }
}

const getCats = () => {
  return [...mockCats];
}

const getCatDetails = (id) => {
  let foundCat = mockCats.find(r => r.id === id);
  if (foundCat) return { ...foundCat };
  return getCatTemplate();
}

const createCat = (cat) => {
  return null;
}

const updateCat = (cat) => {
  return null;
}

const deleteCat = (catId) => {
  return null;
}

export {
  getCatTemplate, getCats, getCatDetails, createCat, updateCat, deleteCat
}