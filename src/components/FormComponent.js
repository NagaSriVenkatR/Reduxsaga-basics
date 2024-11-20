import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { submitFormRequest } from '../Redux 4/Action/action';

function FormComponent() {
  const dispatch = useDispatch();
  const {loading ,success,error} = useSelector((state) => state);
  const [formData,setFormData] = useState({name:'',email:''});
  const handleChange = (e) => {
    const {name,value} = e.target;
    setFormData((prev) => ({...prev,[name]:value}))
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(submitFormRequest(formData));
  }
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Redux Saga Form Submission</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name :</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email :</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <button>
          {loading ? '...Submiting' : 'Submit'}
        </button>
      </form>
      {success && <p style={{color:'green'}}>{success}</p>}
      {error && <p style={{color:"red"}}>{error}</p>}
    </div>
  );
}

export default FormComponent
