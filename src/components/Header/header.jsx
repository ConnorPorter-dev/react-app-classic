import React, { Component } from 'react'
import Nav from '../Nav/nav'

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <React.Fragment>
                <h1>Welcome to this application!</h1>
                <Nav pages={["this", "is", "memes"]}/>
            </React.Fragment>
         );
    }
}
 
export default Header;