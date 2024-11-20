import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchDataRequest } from '../Redux 3/action/Action';

const MyComponent = () => {
  const dispatch = useDispatch();
  const {loading,data,error} = useSelector(state => state);
  const fetchUser = () => {
    dispatch(fetchDataRequest())
  }
  return (
    <div style={{textAlign:'center'}}>
      <h1>Fetched Data:</h1>
      <button onClick={fetchUser}>Fetch User</button>
      {loading && <p>Loading...</p>}
      {data && (
        <div>
          <h2>User Data :</h2>
          <p>Name: {data.name}</p>
          <p>Email: {data.email}</p>
        </div>
      )}
      {error &&<p style={{color:"red"}}>Error :{error}</p>}
    </div>
  )
}

export default MyComponent;
