import React from 'react';
import './App.css';
import Main from "./components/page/main/Main";

function App() {
  return (
      <div className="page-container">
          <header className="header-container">
              <div className="header-logo"><p><b>cvetok</b></p></div>
              <nav className="menu-container">
                  <a className="menu-item menu-item-active">Главная</a>
                  <a className="menu-item">Каталог</a>
                  <a className="menu-item">Контакты</a>
              </nav>
          </header>
          <div className="tab-container">
              <Main/>
          </div>
      </div>
  );
}

export default App;
