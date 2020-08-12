import React, { Component } from "react";
import './Person.css';
import Radium from 'radium';

class Person extends Component{

    render(){
        const style = {
            '@media(min - width: 500px)': {
                width: "450px",
            }
        }
        console.log("[person.js] render");
        return (
            <div className='Person' style={style}>
                <p onClick={this.props.click}>I am a {this.props.name} and I am {this.props.age} years old.</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name}/>
            </div>
        );
    }



    // const  random = Math.random();

    // if(random < .1){
    //     throw new Error("30% chance of crashing the app. Lets try to handle it.");
    // }
}

export default Radium(Person);