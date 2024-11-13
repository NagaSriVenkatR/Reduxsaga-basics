import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteDataRequest, fetchDataSuccess } from '../Redux 2/action';

const MyComponents = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.dataReducer.data);
  const error = useSelector((state) => state.dataReducer.error);
  useEffect(() => {
    dispatch(fetchDataSuccess());
    console.log(fetchDataSuccess);
  },[dispatch]);
  const handleDeleteData = () => {
    dispatch(deleteDataRequest());
  };
  return (
    <div className='app-container'>
      <h1>Redux Saga App</h1>
      <div className='data-container'>
        {data ? (
          <div className='data'>
            {JSON.stringify(data)};
          </div>
         )
         : (
          <div className='loading'>
            {
              error ? `Error: ${error}`
              : "Loading data..."
            }
          </div>
        )
        }
      </div>
      <button className='fetch-button' onClick={() => dispatch(fetchDataSuccess())}>
        Fetch Data
      </button>
      <button className='delete-button' onClick={handleDeleteData}>
        Delete Data
      </button>
    </div>
  )
}

export default MyComponents
