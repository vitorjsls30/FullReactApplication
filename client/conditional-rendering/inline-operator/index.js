import React from 'react';
import ReactDOM from 'react-dom';

function MailBox(props) {
    const unreadMessages = props.unreadMessages;
    return (
        <div>
            <h1>Hello!</h1>
            {unreadMessages.length > 0 &&
                <h2>
                    You have {unreadMessages.length} unread messages.
                </h2>
            }
        </div>
    );
}
const messages = ['react', 'Re: react', 'Re:Re: react'];

ReactDOM.render(
  <MailBox unreadMessages={messages} />,
  document.getElementById('root')  
);