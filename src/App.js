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

    switchNameHandler = () => {
        // Don't use this. Changing the state directly
        // this.state.persons[0].name = "Mohit Jain"

        this.setState({ persons: [
                {
                    name: "Mohit Jain", age: 32
                },
                {
                    name: "Sakshi", age: 27
                },
                {
                    name: "Nipun", age: 29
                }
            ] })
    }

    nameChangedHandler = (event) => {
        // Don't use this. Changing the state directly
        // this.state.persons[0].name = "Mohit Jain"

        this.setState({ persons: [
                {
                    name: "Mohit Jain", age: 32
                },
                {
                    name: event.target.value, age: 27
                },
                {
                    name: "Nipun", age: 29
                }
            ] })
    }

    render() {
        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        }
        return (
            <div className="App">
                <h1>Hi I am a React App.</h1>
                <p>This is working.</p>
                <button style={style} onClick={this.switchNameHandler}>Switch Name</button>
                <Person
                    click={this.switchNameHandler}
                    name={ this.state.persons[0].name }
                    age={ this.state.persons[0].age }/>
                <Person
                    click={this.switchNameHandler}
                    changed={this.nameChangedHandler}
                    name={ this.state.persons[1].name }
                    age={ this.state.persons[1].age }> My hobbies: Running</Person>
                <Person
                    click={this.switchNameHandler}
                    name={ this.state.persons[2].name }
                    age={ this.state.persons[2].age }/>
            </div>
        );
        // return React.createElement('div', { className: 'App' }, 'I am a react app');
    }
}

export default App;
