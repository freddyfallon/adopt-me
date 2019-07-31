import React from 'react';
import { render } from 'react-dom';
import { Router, Link } from '@reach/router';
import SearchParams from './SearchParams';

function App() {
  return (
    <React.StrictMode>
      <div className="main">
        <header>
          <Link to="/">Adopt me!</Link>
        </header>
        <Router>
          <SearchParams path="/" />
        </Router>
    </div>
    </React.StrictMode>
  );
}

render(<App />, document.getElementById('root'));
