import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { NavbarComponent } from './components/NavbarComponent';
import { CardsGroup } from './components/CardComponent/CardsGroup';
import { Title } from './components/Title';


function App() {
  return (
      <>
        <NavbarComponent title='EA school' link='home'/>
        <Title />
        <CardsGroup />
      </>
  );
}

export default App;
