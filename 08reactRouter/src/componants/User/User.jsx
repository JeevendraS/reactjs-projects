import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {UserId} = useParams()
  return (
    <div className='bg-gray-500 text-center text-white text-4xl p-4'>User:{UserId}</div>
  )
}

export default User