import React from 'react';
import ReactDOM from 'react-dom';

import Clock from './Clock';

function tick() {
    ReactDOM.render(
        <Clock />,
        document.getElementById('root')
    );
}

setInterval(tick, 100);