import React from 'react'

const Header = ({title, img, children}) => {
  return (
    <header className='header'>
     <div className='header__container'>
      <div className="header__container-bg">
       <img src={img} alt="" />
      </div>
      <div className="header__content">
       <h2> {title} </h2>
       <p> {children} </p>
      </div>
     </div>
    </header>
  )
}

export default Header