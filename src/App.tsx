import React from 'react';
import './App.css';
import Main from "./components/page/main/Main";
import {BrowserRouter, NavLink, Route, Routes} from "react-router-dom";
import Catalog from "./components/page/catalog/Catalog";
import Contacts from "./components/page/contacts/Contacts";

const routes = [
    {
        path: "/",
        element: <Main/>,
        title: "Главная"
    },
    {
        path: "/catalog",
        element: <Catalog/>,
        title: "Каталог"
    },
    {
        path: "/contacts",
        element: <Contacts/>,
        title: "Контакты"
    }
]

function App() {
  return (
      <BrowserRouter>
          <div className="page-container">
              <div className="tab-container">
                  <Routes>
                      {
                          routes.map(route => (
                              <Route path={`/flower-store${route.path}`} element={route.element}/>
                          ))
                      }
                  </Routes>
              </div>
              <header className="header-container">
                  <div className="header-logo"><p><b>cvetok</b></p></div>
                  <nav className="menu-container">
                      {
                          routes.map(route => (
                              <NavLink
                                  to={`/flower-store${route.path}`}
                                  end={true}
                                  className={({ isActive }) => isActive ? "menu-item-active" : "menu-item"}
                              >
                                  {route.title}
                              </NavLink>
                          ))
                      }
                  </nav>
              </header>
          </div>
      </BrowserRouter>
  );
}

export default App;
