// import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import MyComponents from './components/MyComponents';
// import { takeGetUserFetchAction } from './Redux1/Action/actionCreator';
// import { fetchUser } from './Redux/Action/Action';
function App() {
  // const dispatch = useDispatch();
  // // const { user, loading, error } = useSelector(
  // //   (state) => state.userReducer);
  // const retivedData = useSelector((state) =>{
  //   return state.myReducer;
  // })
  // const handleFetchUser = () => {
  //   dispatch(fetchUser(1));
  // }

  return (
    <div className="App">
      {/* <h1>Redux-Saga User Fetch Example</h1>
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
      )} */}
      {/* <h1>User example for Redux-Saga</h1>
      <button onClick={() => dispatch(takeGetUserFetchAction())}>
        Call API
      </button>
      <hr />
      <div>
        {retivedData?.users && retivedData.users.map((user) => (
          <div key={user.id}>{user.name}</div>
        ))}
        {retivedData?.error && <p>{retivedData.error.message}</p>}
      </div> */}
      <MyComponents />
    </div>
  );
}

export default App;
