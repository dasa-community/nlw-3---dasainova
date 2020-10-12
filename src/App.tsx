import React from 'react';
import './styles/global.css';
import './styles/pages/landing.css';

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
   <h1>Hello World</h1>
  </div>
  );
}
 
export default App;
