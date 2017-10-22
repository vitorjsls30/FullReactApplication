import React from 'react';
import ReactDom from 'react-dom';

function Avatar(props) {
    return (
        <img 
        src={props.user.avatarUrl}
        alt={props.user.name}
        />
    );
}

module.exports = Avatar;