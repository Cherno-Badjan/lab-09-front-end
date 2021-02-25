import React, { Component } from 'react'
import { getCharacters } from './Api-utils';
import Spinner from './Spinner.js';
import { Link } from 'react-router-dom';


export default class ListPage extends Component {
    state = {
        characters: [],
        loading: false,
    }

    componentDidMount = async () => {
        this.setState({
            loading: true,
        });

        const characters = await getCharacters();

        this.setState({
            characters: characters,
            loading: false
        })
    }
    render() {
        return (
            <div className="list">
                {this.state.loading && <Spinner />}

                {this.state.characters.map(character => <Link to={`/characters/${character.id}`} key={character.first_name}>
                    <div className="character">
                        <p>First name: {character.first_name}</p>
                        <p>Last name: {character.last_name}</p>
                        <p>Age: {character.age}</p>
                        <p>Gender: {character.gender}</p>
                        <p>Vegetarian: {character.vegetarian ? 'Vegetarian' : 'Meat Lover'}</p>
                    </div>
                </Link>)}

            </div>
        )
    }
}
