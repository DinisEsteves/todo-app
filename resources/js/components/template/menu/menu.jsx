import React from 'react';

const Menu = () =>{
  return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/#"><i className="fa fa-calendar"></i> TodoApp</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="todos">Todo's</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="about">About</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Menu;