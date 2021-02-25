import React, { Component } from 'react'
import { getCharacter, updateCharacter, deleteCharacter } from './Api-utils.js';

export default class DetailPage extends Component {
    state = {
        first_name: '',
        last_name: '',
        age: '',
        gender: '',
        vegetarian: false,
        gender_id: 1,
    }

    componentDidMount = async () => {
        const character = await getCharacter(this.props.match.params.characterId);
        this.setState({
            first_name: character.first_name,
            last_name: character.last_name,
            age: character.age,
            gender: character.gender,
            vegetarian: character.vegetarian,
            gender_id: character.gender_id,
            characterId: character.id,

        })
    }

    handleFirstNameChange = (e) => this.setState({ first_name: e.target.value })
    handleLastNameChange = (e) => this.setState({ last_name: e.target.value })
    handleAgeChange = (e) => this.setState({ age: Number(e.target.value) })
    handleGender = (e) => this.setState({ gender: e.target.value })
    handleVegetarianChange = () => {
        this.setState({ vegetarian: !this.state.vegetarian })
    }
    handleGenderId = (e) => this.setState({ gender_id: Number(e.target.value) })

    handleUpdate = async (e) => {
        e.preventDefault();

        await updateCharacter(this.props.match.params.characterId, this.state);

        this.props.history.push('/characters');
    }
    handleDelete = async (e) => {
        e.preventDefault();

        await deleteCharacter(this.props.match.params.characterId);

        this.props.history.push('/characters');
    }
    render() {
        return (
            <div>
                DETAIL PAGE
                <form>
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
                        Vegetarian?
                        <input value={this.state.vegetarian} type="checkbox" onChange={this.handleVegetarianChange} checked={this.state.vegetarian} />
                    </label>
                    <label>
                        <select value={this.state.gender_id} onChange={this.handleGenderId}>
                            <option value={1}>Female</option>
                            <option value={2}>Male</option>
                            <option value={3}>Non-binary</option>
                        </select>
                    </label>
                    <button onClick={this.handleUpdate}>Update Character</button>
                    <button onClick={this.handleDelete}>Delete Character</button>
                </form>

            </div>
        )
    }
}
