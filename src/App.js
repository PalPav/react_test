import React, {Component} from 'react';
import logo from './logo.svg';
import List from './components/List';
import TaskForm from './components/TaskForm';
import './App.css';

let list = [
    {name: 'One'},
    {name: 'Two'},
    {name: 'Three'},
];

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome</h1>
                </header>
                <div className="content">
                    <TaskForm list={list}/>
                    <List list={list}/>
                </div>
            </div>
        );
    }
}

export default App;
