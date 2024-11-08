import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { fetchUser } from './Redux/Action/Action';
function App() {
  const dispatch = useDispatch();
  const { user, loading, error } = useSelector(
    (state) => state.userReducer
  ) || { user: null, loading: false, error: null };
  const handleFetchUser = () => {
    dispatch(fetchUser(1));
  }
  return (
    <div className="App">
      <h1>Redux-Saga User Fetch Example</h1>
      <button onClick={handleFetchUser} disabled={loading}>
        {loading ?'Loading...' : 'Fetch User'}
      </button>

      {error && <p style={{color:'red'}}>Error  : {error}</p>}

      {user && (
        <div> 
          <h2>User Info</h2>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
        </div>
      )}
    </div>
  );
}

export default App;
