import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <input value={"hi"} />,
  document.getElementById('root')  
);

setTimeout(() => {
    ReactDOM.render(
        <input value={null} />,
        document.getElementById('root')  
    );  
},1000);