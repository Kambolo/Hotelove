import React, { useState } from 'react'
import { MOCK_ROOMS } from './MockRooms'
import { Room } from './Room'
import RoomList from './RoomList';
import Filters from '../common/Filters';
import './RoomsPage.css'

export const RoomsPage = () => {
  const [rooms, setRooms] = useState<Room[]>(MOCK_ROOMS);

  return (
    <div className='container'>
      <div className='container-filters-rooms'>
        <div className="row">
          <div className="col-sm-2">
            <Filters/>
          </div>
          <div className='col-sm'>
            <RoomList rooms={rooms}/> 
          </div>
        </div>
      </div>
    </div>
  );
}
