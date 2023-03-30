import React from 'react'
import { Link } from 'react-router-dom'
import img from '../images/main_header.png'

const MainHeader = () => {
  return (
    <header className='main__header'>
      <div className='container main__header-container'>
        <div className='main__header-left'>
          <h4>#100DaysOfWordOur</h4>
          <h1>Be the lord of the gym</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat,
            nemo cupiditate. Velit alias molestias exercitationem!
          </p>
          <Link to='/plans' className='btn lg'>
            Get Started
          </Link>
        </div>
        <div className='main__header-right'>
          <div className='main__header-circle'></div>
          <div className='main__header-img'>
            <img src={img} alt='' />
          </div>
        </div>
      </div>
    </header>
  )
}

export default MainHeader
