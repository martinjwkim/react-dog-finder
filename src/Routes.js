import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import DogList from "./DogList"
import Dog from "./Dog"
import duke from "./duke.jpg"
import whiskey from "./whiskey.jpg"
import perry from "./perry.jpg"
import tubby from "./tubby.jpg"

function Routes({dogs}) {


  return (
    <div>
      <Switch>
        <Route exact path="/dogs"><DogList dogs={dogs}/></Route>
        <Route exact path="/dogs/add"><p>Add Dog WIP</p></Route>
        <Route exact path="/dogs/:name"><Dog dogs={dogs}/></Route>
        <Redirect to="/dogs"/>
      </Switch>
    </div>
  );
}

export default Routes;

Routes.defaultProps = {
  dogs: [
    {
      name: "Whiskey",
      age: 5,
      src: whiskey,
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    },
    {
      name: "Duke",
      age: 3,
      src: duke,
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs."
      ]
    },
    {
      name: "Perry",
      age: 4,
      src: perry,
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain."
      ]
    },
    {
      name: "Tubby",
      age: 4,
      src: tubby,
      facts: [
        "Tubby is really stupid.",
        "Tubby does not like walks.",
        "Angelina used to hate Tubby, but claims not to anymore."
      ]
    }
  ]
}
