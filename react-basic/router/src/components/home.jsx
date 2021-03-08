import React from 'react';
import { useHistory } from 'react-router';

const Home = (props) => {
  const history = useHistory();
  return (
    <>
    <h1>home</h1>
    <button onClick={()=>{
      history.push('/profile');
    }}>go to profile</button>
  </>
  )
};



export default Home