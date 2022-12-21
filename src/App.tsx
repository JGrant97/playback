
import React, { useContext } from 'react';
import { Route, Routes } from 'react-router';
import './App.css';
import NavBar from './Components/NavBar';
import VideoScreen from './Screens/VideoScreen';
import AuthContext from './Store/Auth-Context';

function App() {
  const ctx = useContext(AuthContext);

  return (
    <React.Fragment>
      <NavBar/>
      <Routes>
        <Route path="/Watch" element={<VideoScreen />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
