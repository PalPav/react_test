import React, {Component} from 'react';

class TaskForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: ''
        };
    }

    render() {
        return (
            <div className="todo-form">
                <input value={this.state.inputValue} onChange={evt => this.updateInputValue(evt)} name='taskName'/>
                <button type='button' onClick={() => this.addTask()}>+</button>
            </div>
        );
    }

    addTask() {
        this.props.addTask(this.state.inputValue);

        this.setState({
            inputValue: ''
        });
    }

    updateInputValue(evt) {
        this.setState({
            inputValue: evt.target.value
        });
    }
}

export default TaskForm;