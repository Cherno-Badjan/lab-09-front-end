import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <div className="links">
                <NavLink exact activeClassName="active" to="/create">Create</NavLink>
                <NavLink exact activeClassName="active" to="/characters">List</NavLink>
                <NavLink exact activeClassName="active" to="/characters/:characterId">Detail</NavLink>
            </div>
        )
    }
}