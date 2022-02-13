import React from 'react';
import ListItem from './ListItem';

const TableHeader = () => (
  <thead>
    <tr>
      <th
        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
        Name
      </th>
      <th
        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
        Breed
      </th>
      <th
        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
        Birthday
      </th>
      <th
        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
        Description
      </th>
      <th
        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
      </th>
    </tr>
  </thead>
)

const ListBody = ({ list }) => {
  return (
    <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
      <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
        <table className="min-w-full leading-normal">
          <TableHeader />
          <tbody>
            {list.map(r => (<ListItem key={Math.random()} cat={r} />))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ListBody;