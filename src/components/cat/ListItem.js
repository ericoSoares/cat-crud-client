import React from 'react';
import {Link} from 'react-router-dom';

const ListItem = ({ cat }) => {
  return (
    <tr>
      <td className="px-5 py-5 bg-white text-sm">
        <div className="flex items-center">
          <div className="flex-shrink-0 w-10 h-10">
            <img className="w-full h-full rounded-full"
              src={cat.picture}
              alt="" />
          </div>
          <div className="ml-3">
            <p className="text-gray-900 whitespace-no-wrap">
              {cat.name}
            </p>
          </div>
        </div>
      </td>
      <td className="px-5 py-5 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{cat.breed}</p>
      </td>
      <td className="px-5 py-5 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{cat.birthday}</p>
      </td>
      <td className="px-5 py-5 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{cat.description}</p>
      </td>
      <td className="px-5 py-5 bg-white text-sm">
        <Link to={`/cat/${cat.id}`}>
          <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
            View
          </button>
        </Link>
      </td>
    </tr>
  );
}

export default ListItem;