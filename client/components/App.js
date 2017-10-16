import React from 'react';

export default class App extends React.Component {
    constructor() {
        super();
        this.user = {
            firstName: 'Vitor',
            lastName: 'José'
        };

        this.userElement = (
            <h1>
                Hello, {this.formatName(this.user)}
            </h1>
        );
    }
    
    formatName(user) {
        return user.firstName + ' ' + user.lastName;
    }

    render() {
        return (this.userElement);
    }
}