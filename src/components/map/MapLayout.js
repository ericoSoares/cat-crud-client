import React, { useState } from 'react';

const MapLayout = () => {
  const [list, ] = useState([
    { name: 'Cat 1', birthday: '01/01/2021', breed: 'Orange', description: 'An orange cat', picture: 'https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=49ed3252c0b2ffb49cf8b508892e452d' },
    { name: 'Cat 2', birthday: '01/01/2021', breed: 'Orange', description: 'An orange cat', picture: 'https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=49ed3252c0b2ffb49cf8b508892e452d' },
    { name: 'Cat 3', birthday: '01/01/2021', breed: 'Orange', description: 'An orange cat', picture: 'https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=49ed3252c0b2ffb49cf8b508892e452d' },
    { name: 'Cat 4', birthday: '01/01/2021', breed: 'Orange', description: 'An orange cat', picture: 'https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=49ed3252c0b2ffb49cf8b508892e452d' },
    { name: 'Cat 5', birthday: '01/01/2021', breed: 'Orange', description: 'An orange cat', picture: 'https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=49ed3252c0b2ffb49cf8b508892e452d' },
    { name: 'Cat 6', birthday: '01/01/2021', breed: 'Orange', description: 'An orange cat', picture: 'https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=49ed3252c0b2ffb49cf8b508892e452d' }
  ]);

  return (
    <div className="h-screen antialiased font-sans bg-gray-200">
      MAP
    </div>
  )
}

export default MapLayout;