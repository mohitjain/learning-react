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

    togglePersonHandler = () => {
        const doesShow = this.state.showPersons;

        this.setState({ showPersons: !doesShow })
    }

    deletePersonHandler = (personIndex) => {
        const persons = [...this.state.persons]; // This makes a copy. const persons = this.state.persons leads to a pointer.
        persons.splice(personIndex, 1);
        this.setState({persons: persons});
    }

    render() {
        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        }

        let persons = null;
        if(this.state.showPersons){
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return <Person
                            click={() => this.deletePersonHandler(index)}
                            name={person.name}
                            age={person.age}/>
                    })}
                </div>
            )
        }
        return (
            <div className="App">
                <h1>Hi I am a React App.</h1>
                <p>This is working.</p>
                <button style={style} onClick={this.togglePersonHandler}>Toggle Persons</button>
                {persons}
            </div>
        );
        // return React.createElement('div', { className: 'App' }, 'I am a react app');
    }
}

export default App;
