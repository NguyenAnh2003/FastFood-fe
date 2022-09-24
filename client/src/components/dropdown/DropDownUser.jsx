import React, { useState } from 'react'
import { AiOutlineUser } from 'react-icons/ai'
import { Link } from 'react-router-dom';

const userTitle = [
  { 
    page: 'Profile',
    directname: '/profile'
  },
  {
    page: 'Oder History',
    directname: '/orderhistory'
  },
  {
    page: 'Sign up',
    directname: '/signup'
  }
]

export default function DropDownUser() {

  const [showDrop, setShowDrop] = useState(false);

  return (
    <div className='relative'>
      <button
        onClick={() => setShowDrop(!showDrop)}
      >
        <AiOutlineUser size={24} />
      </button>
      {showDrop && (
        <div className="origin-top-right absolute right-[-100px] mt-3 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none overflow-hidden">
            <div className="py-1" role="none">
              {userTitle.map((i, index) => (
                <Link  key={index} to={`${i.directname}`} className="text-gray-700 block px-4 py-2 text-sm hover:bg-hover">{i.page}</Link>
              ))}
            </div>
          </div>
      )}
    </div>
  )
}
