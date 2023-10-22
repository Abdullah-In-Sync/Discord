import React, { useEffect, useState } from 'react';
import './App.css';
import Chats from './Chats';
import Sidebar from './Sidebar';
import { selectUser } from "./features/userSlice"
import { useSelector, useDispatch } from 'react-redux';
import { Login } from './Login';
import { auth } from "./firebase"
import { login, logout } from "./features/userSlice";
import { selectChannelId } from './features/appSlice';
function App() {
  const user = useSelector(selectUser);
  const channelId = useSelector(selectChannelId);

  const [isSidebar, setIsSidebar] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            displayName: authUser.displayName
          })
        );
      } else {
        dispatch(logout())
      }
    });
  }, [dispatch]);

  function toggleSidebar() {
    isSidebar ? setIsSidebar(false) : setIsSidebar(true)
  }

  function getWindowDimensions() {
  const { innerWidth: width} = window;
  return width;
}

  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

useEffect(() => {
  setIsSidebar(false)
}, [channelId])


  return (
    <div className="app">
      {true ? (
        <>
          {
            windowDimensions <= 786 ? (
              <>
                <div onClick={toggleSidebar} className='hamburger'>
                  <div className="line"></div>
                  <div className="line"></div>
                  <div className="line"></div>
                </div>
                {/* Sidebar */}
                {isSidebar ? (
                  <>
                    <Sidebar />
                  </>
                ) : (
                  <>
                    {/* Chat */}
                    <Chats />
                  </>
                )
                }
              </>
            ) : (
              <>
                <Sidebar />
                <Chats/>
              </>
            )
        }
        </>
      ) : (
        <>
          <Login />
        </>
      )}

    </div>
  );
}

export default App;
