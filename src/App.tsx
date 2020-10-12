import React from 'react';
import './styles/global.css';
import './styles/pages/landing.css';
import logoImg from './images/logo.svg';

interface TitleProps {
  text: string;
}

function Title(props: TitleProps) {
  return (
    <h1>{props.text}</h1>
  )
}
 
function App() {
  return (
    <div id="page-landing">
     <div className="content-wrapper">
       <img src={logoImg} alt="Happy" />

        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia dê muitas crianças</p>
        </main>

        <div className="location">
          <strong>Pinheiros</strong>
          <span>São Paulo</span>
        </div>

        <a href="" className="enter-app">
          >
        </a>
      </div> 
  </div>
  );
}
 
export default App;
