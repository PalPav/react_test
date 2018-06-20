import React, {Component} from 'react';

class TaskForm extends Component {
    constructor(props) {
        super(props);
        this.addTask = this.addTask.bind(this);
    }
    addTask() {
        console.log(this.props.list);
    }
    render() {
        return (
            <div className="todo-form">
                <input name='taskName'/>
                <button type='button' onClick={this.addTask}>+</button>
            </div>
        );
    }
}

export default TaskForm;