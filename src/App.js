import React from 'react';
import { render } from 'react-dom';
import Pet from './Pet';

function App() {
  return (
    <div>
      <h1 id="something-important">Adopt me!</h1>
      <Pet name="Nicholas" animal="Cat" colour="Black" />
      <Pet name="Courtney" animal="Cat" colour="Ginger" />
      <Pet name="Steve" animal="Dog" colour="White and brown" />
    </div>
  );

  // The code above gets transpiled to the code below by Babel:

  // return React.createElement('div', {}, [
  //   React.createElement('h1', {}, 'Adopt me!'),
  //   React.createElement(Pet, {
  //     name: 'Nicholas',
  //     animal: 'Cat',
  //     colour: 'Black'
  //   }),
  //   React.createElement(Pet, {
  //     name: 'Courtney',
  //     animal: 'Cat',
  //     colour: 'Ginger'
  //   }),
  //   React.createElement(Pet, {
  //     name: 'Steve',
  //     animal: 'Dog',
  //     colour: 'White and brown'
  //   })
  // ]);
}

render(<App />, document.getElementById('root'));
