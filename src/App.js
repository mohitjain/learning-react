import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';
import Radium, { StyleRoot } from 'radium';
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";

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

        person.name = event.target.value; // Change the name

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
            backgroundColor: 'green',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer',
            ":hover": {
                backgroundColor: 'lightgreen',
                color: 'black'
            }
        }

        let persons = null;
        if(this.state.showPersons){
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return <ErrorBoundary key={person.id}>
                            <Person
                                click={() => this.deletePersonHandler(index)}
                                name={person.name}
                                age={person.age}
                                changed={(event) => this.nameChangedHandler(event, person.id)}
                            />
                        </ErrorBoundary>
                    })}
                </div>
            )
            style.backgroundColor = "Red";
            style[":hover"] = {
                backgroundColor: 'salmon',
                    color: 'black'
            }
        }

        const classes = [];

        if(this.state.persons.length <= 2){
            classes.push('red');
        }

        if(this.state.persons.length <= 1){
            classes.push('bold');
        }

        return (
            <StyleRoot>
            <div className="App">
                <h1>Hi I am a React App.</h1>
                <p className={classes.join(" ")}>This is really working.</p>
                <button style={style} onClick={this.togglePersonHandler}>Toggle Persons</button>
                {persons}
            </div>
            </StyleRoot>
        );
        // return React.createElement('div', { className: 'App' }, 'I am a react app');
    }
}

export default Radium(App);
