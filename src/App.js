import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
            {
                id: 1, name: "Mohit", age: 32
            },
            {
                id: 2, name: "Sakshi", age: 27
            },
            {
                id: 3, name: "Nipun", age: 28
            }
        ],
        showPersons: false
    }

    togglePersonHandler = () => {
        const doesShow = this.state.showPersons;

        this.setState({ showPersons: !doesShow })
    }

    nameChangedHandler = (event, id) => {
        // Don't use this. Changing the state directly
        // this.state.persons[0].name = "Mohit Jain"


        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });

        const person = {
            ...this.state.persons[personIndex]
        }; // This is used to find the object and make a copy of it.

        person.name = event.target.name; // Change the name

        const persons = [...this.state.persons]; // Again making a copy first..
        persons[personIndex] = person;

        this.setState({ persons: persons });
    }

    deletePersonHandler = (personIndex) => {
        const persons = [...this.state.persons]; // This makes a copy. const persons = this.state.persons leads to a pointer.
        persons.splice(personIndex, 1);
        this.setState({ persons: persons });
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
                            age={person.age}
                            key={person.id}
                            changed={(event) => this.nameChangedHandler(event, person.id)}
                        />
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
