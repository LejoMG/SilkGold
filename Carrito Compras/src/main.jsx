/* import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { Counter } from './EjeUseState'
import { ItemList } from './EjeUseEffect'
import { App } from './EjeUseContext'
import { CounterReducer } from './EjeUseReducer'
import { FocusInput } from './EjeUseRef'
import { AppAPI } from './EjeContextAPI'

createRoot(document.getElementById('root')).render(
  <>
    <Counter />
    <ItemList />
    <App />
    <CounterReducer />
    <FocusInput />
    <AppAPI />
  </>,
) */

/* 
import { App } from './pages/App' */
/* import { AppInternos } from './ejemploInternos/Principal' */

/* import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App"; */
/* import './index.css' */

/* const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <App />
  </>
); */

/* root.render(
    <> */
        {/* <AppEjemplo /> --> Ejemplo Base */}
        {/* <AppPrincipal /> --> Ejemplo de Paginas */}
        {/* <AppInternos /> {}
    </>
) */}

/* import React from 'react'
import ReactDOM from 'react-dom/client'

import { Products } from './fetchPromesa/Products'
import { Users } from './fetchAsincronismo/Users'
import { Categoria } from './componentBootUI/Category'

import { Header } from './generalComponents/Cabecera'
import { Footer } from './generalComponents/PiePag'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <>
      <Header />
      <Products />
      <Users />
      <Categoria />
      <Footer />
    </>
) */

  import { StrictMode } from "react";
  import { createRoot } from "react-dom/client";
  import './index.css'
  import { App } from "./App.jsx";

  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )