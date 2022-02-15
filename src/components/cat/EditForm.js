import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import useCatDetails from '../../hooks/useCatDetails';
import { getCatTemplate, createCat, updateCat, deleteCat } from '../../services/catApi';

const EditForm = () => {
  let { id } = useParams();
  let navigate = useNavigate();
  let { data, loading } = useCatDetails(id);
  let [formData, setFormData] = useState(getCatTemplate());

  useEffect(() => {
    if (!loading) {
      data && setFormData(data);
    }
  }, [data]);

  const handleValueChange = (key, value) => {
    let newFormData = { ...formData, [key]: value };
    setFormData(newFormData);
  }

  const submitData = (e) => {
    e.preventDefault();
    return data?.id
      ? updateCat(data.id, { ...formData }).then(() => navigate('/'))
      : createCat({ ...formData }).then(() => navigate('/'));
  }

  const handleDelete = (e) => {
    e.preventDefault();
    return data?.id && deleteCat(data.id).then(() => navigate('/'));
  }

  const renderFormField = (key, label) => {
    return (
      <div className="flex flex-col mb-4">
        <label className="mb-2 font-bold text-lg text-gray-900" htmlFor="name">{label}</label>
        <input
          value={(formData && formData[key]) || ''}
          className="border py-2 px-3 text-grey-800"
          type="text"
          name="name"
          id="name"
          onChange={(e) => handleValueChange(key, e.target.value)}
        />
      </div>
    )
  }

  if (loading) return (<div>Loading...</div>)
  return (
    <div className="h-screen antialiased font-sans bg-gray-200 py-20">
      <div className="flex justify-center items-center w-full">
        <div className="w-1/2 bg-white rounded p-8 m-4">
          <div className="flex">
            <div className="cursor-pointer w-10" onClick={() => navigate('/')}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 17l-5-5m0 0l5-5m-5 5h12" />
              </svg>
            </div>
            <h1 className="block w-full text-center text-gray-800 text-2xl font-bold mb-6 -ml-6">{data?.id ? data.name : 'New cat'}</h1>
          </div>
          <form action="/" method="post">
            {renderFormField('name', 'Name')}
            {renderFormField('breed', 'Breed')}
            {renderFormField('birthday', 'Birthday')}
            {renderFormField('description', 'Description')}
            {renderFormField('picture', 'Picture URL')}
            <div className="flex justify-end">
              {formData.id && (
                <button
                  className="px-4 flex justify-center bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 border border-gray-400 rounded shadow"
                  onClick={handleDelete}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              )}
              <button
                className="ml-2 px-10 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline"
                onClick={submitData}
              >
                {formData.id ? 'Save' : 'Create cat'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditForm;