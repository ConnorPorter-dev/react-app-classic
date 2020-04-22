import React, { Component } from 'react';
import './nav.css'

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = { faded: false }
    }
    render() { 
        return ( 
            <nav>
                <ul>
                    {this.props.pages.map((page, index) => <li className="navItem"key={index}>{page}</li>)}
                </ul>
            </nav>
         );
    }
}
 
export default Nav;