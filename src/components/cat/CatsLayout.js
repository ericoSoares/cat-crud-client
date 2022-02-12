import React, { useMemo, useState } from 'react';
import ListFilter from './ListFilter';
import ListBody from './ListBody';
import { getCats } from '../../services/catApiMock';
import useCatList from '../../hooks/useCatList';

const CatsLayout = () => {
  const [filter, setFilter] = useState('');
  const { data } = useCatList();

  const filteredCatList = useMemo(() => {
    if (!filter) return [...data];
    return data.filter(r => r.name.toLowerCase().includes(filter.toLowerCase()));
  }, [filter, data])

  return (
    <div className="h-screen antialiased font-sans bg-gray-200">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="py-8">
          <div>
            <h2 className="text-2xl font-semibold leading-tight">Cats</h2>
          </div>
          <ListFilter value={filter} setValue={setFilter} />
          <ListBody list={filteredCatList} />
        </div>
      </div>
    </div>
  )
}

export default CatsLayout;