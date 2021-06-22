import '/../public/css/app.css';

import React from 'react';
import Menu from './template/menu';
import Routes from './routes';

const App = () => {
  return (
    <div className="container">
      <Menu />
      <Routes />
    </div>
  );
};
export default App;


