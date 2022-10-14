import React from 'react'
import './style.css';

export default function LoadingComponent() {
  return (
    <div className='flex items-center justify-center h-screen bg-white'>
      <div className="loadingContainer">
        <div className="beakSmall"></div>
        <div className="head"></div>
        <div className="eye"></div>
        <div className="beakLarge"></div>
      </div>
    </div>
  )
}
