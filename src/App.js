import React, { useEffect } from 'react';

import './App.css';
import Chats from './Chats';
import Sidebar from './Sidebar';
import { selectUser } from "./features/userSlice"
import { useSelector } from 'react-redux';
import { Login } from './Login';
import { auth } from "./firebase"

function App() {
  const user = useSelector(selectUser);
  useEffect(()=> {
    auth.onAuthStateChanged((authUser)=> {
      if (authUser) {

      } else {

      }
    });
  })
  return (
    <div className="app">
      {user?(
        <>
      {/* Sidebar */}
      <Sidebar/>

      {/* Chat */}
      <Chats/>
      </>
      ):(
        <>
        <Login/>
        </>
      )}
      
    </div>
  );
}

export default App;
