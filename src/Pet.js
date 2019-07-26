import React from 'react';
export default function Pet({ name, animal, colour }) {
  return (
    <div>
      <h1>{name}</h1>
      <h2>{animal}</h2>
      <h2>{colour}</h2>
    </div>
  );
  // The code above gets transpiled to the code below by Babel:

  // return React.createElement('div', {}, [
  //   React.createElement('h1', {}, name),
  //   React.createElement('h2', {}, animal),
  //   React.createElement('h2', {}, colour)
  // ]);
}
