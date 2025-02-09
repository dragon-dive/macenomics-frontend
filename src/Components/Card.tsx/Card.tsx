import React from 'react'
import './Card.css';

type Props = {}

const Card = (props: Props) => {
  return <div className='card'>
    <img
      src='/resources/images/aapl.png'
      alt='AAPL'
      />
      <div className='details'>
        <h2>AAPL</h2>
        <p>$110</p>
      </div>
      <p className='infon'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut aperiam tempora eum molestiae omnis eos harum beatae iure explicabo. Vitae itaque necessitatibus minima impedit nulla aut adipisci minus ratione accusantium.
      </p>
  </div>
}

export default Card