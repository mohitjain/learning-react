import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>Hi I am a React App.</h1>
                <p>This is working.</p>
                <Person name="Mohit" age='32'/>
                <Person name="Nipun" age='27'> My hobbies: Running</Person>
                <Person name="Sakshi" age='26'/>
            </div>
        );
        // return React.createElement('div', { className: 'App' }, 'I am a react app');
    }
}

export default App;
