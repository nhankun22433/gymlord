import React from 'react'
import Card from '../UI/Card'

const Trainer = ({ image, name, job, socials }) => {
  return (
    <Card className='trainer'>
      <div className='trainer__img'>
        <img src={image} alt={name} />
      </div>
      <h3> {name} </h3>
      <p> {job} </p>
      <div className='tranier__social'>
        {socials.map(({ icon, link }, index) => {
          return (
            <a href={link} key={index}>
              {icon}
            </a>
          )
        })}
      </div>
    </Card>
  )
}

export default Trainer
