import React, { useEffect } from "react";
import Radium from "radium";

const Cockpit = ( props ) => {
    useEffect(() => {
        console.log("Runs on Every render cycle, [Cockpit] UseEffect, After adding props.persons, now it runns only when persons changes.");
        // Use multiple useEffect for multiple handlings..
        // Http request...

    }, [props.persons]);

    useEffect(() => {
        console.log("Run Only Once on first render, [Cockpit] UseEffect");
        // Use multiple useEffect for multiple handlings..
        // Http request...
        return () => {
            console.log("[Cockpit.js] Cleanup work in UseEffect.");
        };
    }, []);

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

    if(props.personsLength <= 2){
        assignedClasses.push('red');
    }

    if(props.personsLength <= 1){
        assignedClasses.push('bold');
    }

    if(props.showPersons){
        style.backgroundColor = "Red";
        style[":hover"] = {
            backgroundColor: 'salmon',
            color: 'black'
        }
    }
    console.log("[Cockpit.js] Rendering..")
    return (
        <div>
            <h1>Hi I am a React App.</h1>
            <p className={assignedClasses.join(" ")}>This is really working.</p>
            <button style={style} onClick={props.clicked}>Toggle Persons</button>
        </div>

    );
}

export default React.memo(Radium(Cockpit));