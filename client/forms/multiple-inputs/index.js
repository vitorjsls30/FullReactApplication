import React from 'react';
import ReactDOM from 'react-dom';

class Reservation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isGoing: true,
            numberOfGuests: 2
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.type == 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        })
    }

    render() {
        return(
            <form>
                <label>
                    is Going:
                    <input
                    name="isGoing"
                    type="checkbox"
                    checked={this.state.isGoing}
                    onChange={this.handleInputChange}/>
                </label>
                <br/>
                <label>
                    Number of Guests:
                    <input
                    name="numberOfGuests"
                    type="number"
                    value={this.state.numberOfGuests}
                    onChange={this.handleInputChange}
                    />
                </label>
            </form>
        );
    }
}

ReactDOM.render(
    <Reservation />,
    document.getElementById('root')
)