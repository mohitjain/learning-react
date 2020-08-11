import React from "react";
import classes from './Cockpit.css';
import Persons from "../Persons/Persons";
import Radium from "radium";

const cockpit = ( props ) => {
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

    const assignedClasses = [];

    if(props.persons.length <= 2){
        assignedClasses.push('red');
    }

    if(props.persons.length <= 1){
        assignedClasses.push('bold');
    }

    if(props.showPersons){
        style.backgroundColor = "Red";
        style[":hover"] = {
            backgroundColor: 'salmon',
            color: 'black'
        }
    }

    return (
        <div>
            <h1>Hi I am a React App.</h1>
            <p className={assignedClasses.join(" ")}>This is really working.</p>
            <button style={style} onClick={props.clicked}>Toggle Persons</button>
        </div>

    );
}

export default Radium(cockpit);