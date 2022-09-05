import React from 'react';

import './App.css';
import Chats from './Chats';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="app">
      <h2> We are building descord</h2>


      {/* Sidebar */}
      <Sidebar/>

      {/* Chat */}
      <Chats/>
      
    </div>
  );
}

export default App;
