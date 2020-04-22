import React, { Component } from 'react';
import Counter from './components/Counter/counter'
import Header from './components/Header/header'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div>
                <Header />
                <Counter />
            </div>
         );
    }
}
 
export default App;