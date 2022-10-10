import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <Link to= '/Component1' className='bg-rose-300 p-2'>Component 1</Link>
      <Link to= '/Component2' className='bg-emerald-300 p-2'>Component 2</Link>
    </div>
  )
}

export default Home