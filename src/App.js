import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
            {
                name: "Mohit", age: 32
            },
            {
                name: "Sakshi", age: 27
            },
            {
                name: "Nipun", age: 28
            }
        ]
    }
    render() {
        return (
            <div className="App">
                <h1>Hi I am a React App.</h1>
                <p>This is working.</p>
                <Person name={ this.state.persons[0].name } age={ this.state.persons[0].age }/>
                <Person name={ this.state.persons[1].name } age={ this.state.persons[1].age }> My hobbies: Running</Person>
                <Person name={ this.state.persons[2].name } age={ this.state.persons[2].age }/>
            </div>
        );
        // return React.createElement('div', { className: 'App' }, 'I am a react app');
    }
}

export default App;
