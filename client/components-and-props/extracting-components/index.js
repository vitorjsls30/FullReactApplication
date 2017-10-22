import React from 'react';
import ReactDOM from 'react-dom';

import UserInfo from './userInfo';

function formatDate(date) {
    return date.toLocaleDateString();
}

function Comment(props) {
    return (
        <div className="Comment">
            <UserInfo user={props.author} />
                
            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    );
}

const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning react!',
    author: {
        name: 'Hello Kitty',
        avatarUrl: 'http://placekitten.com/g/64/64'
    }
}

ReactDOM.render(
    <Comment 
        date={comment.date}
        text={comment.text}
        author={comment.author}/>,
        document.getElementById('root')
);