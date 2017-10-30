import React from 'react';
import ReactDOM from 'react-dom';
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };

    //This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log('inside handleClick');
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        Button Component
      </button>
    );
  }
}

ReactDOM.render(<Toggle />, document.getElementById('root'));
