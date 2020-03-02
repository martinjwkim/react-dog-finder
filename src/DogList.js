import React from 'react';
import { Link } from 'react-router-dom';


function DogList({dogs}){
  const dogLinks = (
    dogs.map(dog => (
    <li key={dog.name}><Link to={`/dogs/${dog.name}`}>{dog.name}</Link></li>
    ))
  )
  return (
    <ul>
      {dogLinks}
    </ul>
  )
}

export default DogList;
