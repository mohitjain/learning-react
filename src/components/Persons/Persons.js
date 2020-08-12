import React, {Component} from "react";
import Person from "./Person/Person";

class Persons extends Component {

    // static getDerivedStateFromProps(props, state){
    //     console.log("[Persons.js] getDerivedStateFromProps");
    //     return state; // Return updated here
    // }


    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log("[Persons.js] shouldComponentUpdate");
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("[Persons.js] getSnapshotBeforeUpdate");
        return { message: "Snapshot taken" };
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("[Persons.js] componentDidUpdate");
        console.log(snapshot)
    }

    render(){
        console.log("[persons.js] render");
        return this.props.persons.map((person, index) => {
            return <Person
                click={() => this.props.clicked(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.props.changed(event, person.id)}
            />

        }
    );
}}

export default Persons;