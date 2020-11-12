import React from "react";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {category: 'cleanings'};

        this.handleChange = this.handleChange.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }
    handleChange2(event) {
        this.setState({category: event.target.value});
    }
    handleSubmit(event) {
        console.log(this.state);
        event.preventDefault();
        var self = this;
        fetch('/users', {
            method: 'POST',
            data: {
                firstname: self.firstname,
                lastname: self.lastname,
                email: self.email,
                telephone: self.telephone,
                category: self.category
            }
        })
            .then(function(response) {
                return response.json()
            }).then(function(body) {
            console.log(body);
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Firstname:
                    <input
                        type="text"
                        value={this.state.firstname}
                        onChange={this.handleChange}
                        name="firstname"
                        placeholder="firstname"
                    />
                </label>
                <label>
                    Lastname:
                    <input
                        type="text"
                        value={this.state.lastname}
                        onChange={this.handleChange}
                        name="lastname"
                        placeholder="lastname"
                    />
                </label>
                <label>
                    Email:
                    <input
                        type="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        name="email"
                        placeholder="email"
                    />
                </label>
                <label>
                    Telephone:
                    <input
                        type="text"
                        value={this.state.telephone}
                        onChange={this.handleChange}
                        name="Telephone"
                        placeholder="Telephone"
                    />
                </label>
                <label>
                    Category:
                    <select value={this.state.category} onChange={this.handleChange2}>
                        <option value="cleanings">Cleanings</option>
                        <option value="epc">EPC</option>
                        <option value="eicr">EICR</option>
                    </select>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        );
    }
}
export default (App);