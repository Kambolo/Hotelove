import React from 'react';
import './App.css';
import Header from './common/Header';
import { SearchBar } from './common/SearchBar';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import RoomList from './Rooms/RoomList';
import { RoomsPage } from './Rooms/RoomsPage';

function App() {
  return (
  <Router>
    <Header/>
    <SearchBar/>
    <RoomsPage/>
    <div className="container">
      <Routes>
        <Route path="/"></Route>
        <Route path='/log-in'></Route>
      </Routes>
    </div>
  </Router>
  );
}

export default App;
