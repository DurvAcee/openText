import React from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar(props) {
  return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">{props.title}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <Link className="nav-link" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/about">About</Link>
                        </li>

                    </ul>
                    <span style={{color: props.mode==='dark'?'white':'black'}}> Switch to {`${props.mode==='light'?'Dark':'Light'}`} Mode &nbsp;</span>
                        <div class = 'toggle-switch mx-1 my-2'>
                            <label> 
                                <input type = 'checkbox' onClick = {props.toggleMode} />
                                <span class = 'slider'></span>
                            </label>
                        </div>
                    </div>
                </div>
        </nav>
  )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    abtText: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: 'Set Title Here',
    abtText: 'Set About Text'
}