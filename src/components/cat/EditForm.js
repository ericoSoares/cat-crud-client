import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import useCatDetails from '../../hooks/useCatDetails';
import { getCatTemplate } from '../../services/catApiMock';

const EditForm = () => {
  let { id } = useParams();
  let navigate = useNavigate();
  let { data } = useCatDetails(id);
  let [formData, setFormData] = useState(getCatTemplate());

  useEffect(() => {
    data && setFormData(data);
  }, [data]);

  const handleValueChange = (key, value) => {
    let newFormData = { ...formData, [key]: value };
    setFormData(newFormData);
  }

  const submitData = (e) => {
    e.preventDefault();
    alert('submitting data');
    // TODO
  }

  const renderFormField = (key, label) => {
    return (
      <div className="flex flex-col mb-4">
        <label className="mb-2 font-bold text-lg text-gray-900" for="name">{label}</label>
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

  const renderForm = () => {
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
              <h1 className="block w-full text-center text-gray-800 text-2xl font-bold mb-6 -ml-6">{data.id ? data.name : 'New cat'}</h1>
            </div>
            <form action="/" method="post">
              {renderFormField('name', 'Name')}
              {renderFormField('breed', 'Breed')}
              {renderFormField('birthday', 'Birthday')}
              {renderFormField('description', 'Description')}
              {renderFormField('picture', 'Picture URL')}
              <div className="flex flex-col">
                <button
                  className="px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline"
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

  return (
    <>
      {data && renderForm()}
    </>
  );
}

export default EditForm;