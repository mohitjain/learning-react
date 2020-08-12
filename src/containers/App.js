import React, {Component} from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';
import Radium, { StyleRoot } from 'radium';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {

    constructor(props) {
        super(props);
        console.log("[Apps.js] Constuctor");

        // this.state = ''; Can be set here.
    }

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

    static getDerivedStateFromProps(props, state){
        console.log("[Apps.js] getDerivedStateFromProps");
        return state; // Return updated here
    }

    componentDidMount() {
        console.log("[Apps.js] componentDidMount");
    }

    componentWillMount() {
        console.log("[Apps.js] componentWillMount()");
    }

    togglePersonHandler = () => {
        const doesShow = this.state.showPersons;

        this.setState({ showPersons: !doesShow })
    }

    nameChangedHandler = (event, id) => {
        // Don't use this. Changing the state directly
        // this.state.Persons[0].name = "Mohit Jain"


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
        const persons = [...this.state.persons]; // This makes a copy. const Persons = this.state.Persons leads to a pointer.
        persons.splice(personIndex, 1);
        this.setState({ persons: persons });
    }

    render() {
        console.log("[Apps.js] Render");
        let persons = null;
        if(this.state.showPersons){
            persons = (
                <div>
                    <Persons
                        persons={ this.state.persons }
                        clicked={ this.deletePersonHandler }
                        changed={ this.nameChangedHandler }
                    />

                </div>
            )
        }


        return (
            <StyleRoot>
            <div className="App">
                <Cockpit
                    persons={this.state.persons}
                    clicked={this.togglePersonHandler}
                    showPersons={this.state.showPersons}
                />
                {persons}
            </div>
            </StyleRoot>
        );
        // return React.createElement('div', { className: 'App' }, 'I am a react app');
    }
}

export default Radium(App);
