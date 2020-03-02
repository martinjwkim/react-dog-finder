import React from 'react';
import {useParams} from 'react-router-dom'

function Dog({dogs}){
  const {name} = useParams();
  const dog = dogs.filter(dog => dog.name===name)[0];
  return (
    <div>
      <h1>{name}</h1>
      <img src={dog.src} alt={name} style={{width:"300px"}}/>
      <h3>Age =  {dog.age} </h3>
      {dog.facts.map(fact=><li>{fact}</li>)}
    </div>
  );
}

export default Dog;