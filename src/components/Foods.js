import React from 'react'

const Foods = ({ people }) => {
  const totalPeople = parseInt(people.adults) + parseInt(people.children) / 2;
  const foods = {
    beer: (parseInt(people.adults) * 1.4).toFixed(3),
    soda: (totalPeople * 0.2).toFixed(3),
    meat: (totalPeople * 0.4).toFixed(3),
    cheese: (totalPeople * 0.15).toFixed(3)
  }

  return (
    <div className='food-form'>
      <div className='food-result'>
        <h3>Cerveja</h3>
        <p>{foods.beer} l</p>
      </div>
      <div className='food-result'>
        <h3>Refrigerante</h3>
        <p>{foods.soda} l</p>
      </div>
      <div className='food-result'>
        <h3>Carne</h3>
        <p>{foods.meat} kg</p>
      </div>
      <div className='food-result'>
        <h3>Queijinho</h3>
        <p>{foods.cheese} kg</p>
      </div>
    </div>
  )
}

export default Foods
