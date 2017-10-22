import React from 'react';
import ReactDom from 'react-dom';

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Vitor" />
      <Welcome name="Vinicius" />
    </div>
  );
  }

ReactDom.render(<App/>, document.getElementById('root'));
