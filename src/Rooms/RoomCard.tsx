import React from 'react'
import { Room } from './Room';
import './RoomCard.css'

interface RoomCardProps {
  room: Room;
}

const RoomCard = ({room}: RoomCardProps) => {
  return (
    <div className='card fluid'>
      <div className="container-card">
        <div className="row">
        <img src={room.imageUrl} alt="room image"/>
        <section className='section dark'>
          <h5 className='strong'>
            <strong>{room.name}</strong>
          </h5>
          <p>Standard: {room.standard}</p>
          <p>Capacity: {room.capacity}</p>
          <p className='desc'>Description: {room.description}</p>
          <p>Price: {room.price}</p> 
        </section>
        </div>
      </div>
    </div>
  )
}

export default RoomCard;
