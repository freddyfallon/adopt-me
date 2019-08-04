import { createContext } from 'react';

const ThemeContext = createContext(['green', () => {}]); // this is just to take the correct shape for useContext

export default ThemeContext;
