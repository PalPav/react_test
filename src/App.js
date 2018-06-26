import React, {Component} from 'react';
import logo from './logo.svg';
import List from './components/List';
import TaskForm from './components/TaskForm';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                {name: 'Task One'},
                {name: 'Task Two'},
                {name: 'Task Three'},
            ]
        };
    }

    addTask(name) {
        const list = this.state.list.slice();
        list.push({name: name});

        this.setState({
            list: list
        });
    }

    removeTask(position) {
        console.log('remove.task', position);
        const list = this.state.list.slice();

        list.splice(position, 1);

        this.setState({
            list: list
        });
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome</h1>
                </header>
                <div className="content">
                    <TaskForm addTask={(name)=> this.addTask(name)}/>
                    <List list={this.state.list} removeTask={(position) => this.removeTask(position)}/>
                </div>
            </div>
        );
    }
}

export default App;
