import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useCatDetails from '../../hooks/useCatDetails';

const EditForm = () => {
  let { id } = useParams();

  let { data } = useCatDetails(id);

  const renderForm = () => {
    return (
      <div className="flex justify-center items-center w-full">
        <div className="w-1/2 bg-white rounded p-8 m-4">
            <h1 className="block w-full text-center text-gray-800 text-2xl font-bold mb-6">{data ? data.name : 'New cat'}</h1>
            <form action="/" method="post">
                <div className="flex flex-col mb-4">
                    <label className="mb-2 font-bold text-lg text-gray-900" for="name">Name</label>
                    <input value={data?.name || ''} className="border py-2 px-3 text-grey-800" type="text" name="name" id="name" />
                </div>
                <div className="flex flex-col mb-4">
                    <label className="mb-2 font-bold text-lg text-gray-900" for="breed">Breed</label>
                    <input value={data?.breed || ''} className="border py-2 px-3 text-grey-800" type="text" name="breed" id="breed" />
                </div>
                <div className="flex flex-col mb-4">
                    <label className="mb-2 font-bold text-lg text-gray-900" for="birthday">Birthday</label>
                    <input value={data?.birthday || ''} className="border py-2 px-3 text-grey-800" type="text" name="birthday" id="birthday" />
                </div>
                <div className="flex flex-col mb-4">
                    <label className="mb-2 font-bold text-lg text-gray-900" for="decription">Description</label>
                    <input value={data?.description || ''} className="border py-2 px-3 text-grey-800" type="decription" name="text" id="decription" />
                </div>
                <div className="flex flex-col mb-6">
                    <label className="mb-2 font-bold text-lg text-gray-900" for="picture">Picture URL</label>
                    <input value={data?.picture || ''} className="border py-2 px-3 text-grey-800" type="picture" name="text" id="picture" />
                </div>
                <div className="flex flex-col">
                  <button 
                    className="px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline"
                  >
                    {data ? 'Save' : 'Create cat'}
                  </button>
                </div>
            </form>
        </div>
    </div>
    );
  }

  return (
    <>
      {data ? (
        <div className="h-screen antialiased font-sans bg-gray-200 py-20">
          {renderForm()}
        </div>
      ) : (<div>Cat not found :(</div>)}
    </>
  );
}

export default EditForm;