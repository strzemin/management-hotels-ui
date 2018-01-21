import React from 'react';
import { render } from 'react-dom';
import App from './components/App';

const header = 'Init aplikacji strzemin';

render(<App name={header} />, document.getElementById('root'));
//a jak