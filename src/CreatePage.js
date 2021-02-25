import React, { Component } from 'react'
import { createCharacter } from './Api-utils.js';


export default class CreatePage extends Component {
    //set state. Items were are tracking in state are columns in character table
    state = {
        first_name: '',
        last_name: '',
        age: '',
        gender: '',
        vegetarian: false,
        gender_id: 1,
    }

    handleFirstNameChange = (e) => this.setState({ first_name: e.target.value })
    handleLastNameChange = (e) => this.setState({ last_name: e.target.value })
    handleAgeChange = (e) => this.setState({ age: Number(e.target.value) })
    handleGender = (e) => this.setState({ gender: e.target.value })
    handleVegetarianChange = () => {
        this.setState({ vegetarian: !this.state.vegetarian })
    }
    handleGenderId = (e) => this.setState({ gender_id: Number(e.target.value) })

    handleSubmit = async (e) => {
        e.preventDefault();

        await createCharacter(this.state);

        this.props.history.push('/characters');
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        First Name:
                        <input value={this.state.first_name} onChange={this.handleFirstNameChange} />
                    </label>
                    <label>
                        Last Name:
                        <input value={this.state.last_name} onChange={this.handleLastNameChange} />
                    </label>
                    <label>
                        Age:
                        <input value={this.state.age} onChange={this.handleAgeChange} />
                    </label>
                    <label>
                        Gender:
                        <input value={this.state.gender} onChange={this.handleGender} />
                    </label>
                    <label>
                        Vegetarian?
                        <input value={this.state.vegetarian} type="checkbox" onChange={this.handleVegetarianChange} />
                    </label>
                    <label>
                        <select value={this.state.gender_id} onChange={this.handleGenderId}>
                            <option value={1}>Female</option>
                            <option value={2}>Male</option>
                            <option value={3}>Non-binary</option>
                        </select>
                    </label>
                    <button>Create Character</button>
                </form>

            </div>
        )
    }
}

