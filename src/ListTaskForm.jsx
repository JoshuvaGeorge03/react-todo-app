import React from 'react';
import {EditFormTask} from './EditTaskForm';

class ListTasks extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         isEditingSelected: false
    //     };
    // }
    render() {
        if(this.props.lists?.length) {
            return <ul>
                {this.props.children}
                {/**
                 * {this.state.tasks.map(task => { Props drilling is passing props to a child component that doesn’t need the props but helps to pass it down to its own child component, which might pass it to its own child component because it doesn’t need it as well till it gets to the child that really needs the props.
                 * The problem with props drilling is that things get messy, and debugging might become difficult quickly.
A good solution might be to reach out for the context API or Redux, but that is not needed to solve this problem.
We could use composition (component composition) to our advantage. In fact, the React team says:
If you only want to avoid passing some props through many levels, component composition is often a simpler solution than context.
                    return <li key={task.title}>
                        <p>{task.title}</p>
                        <EditFormTask removeTask={this.removeTask.bind(this)} updateTask={(index, editedTask) => this.updateTask(index, editedTask)} task={task}></EditFormTask> 
                    </li>
                })}
                 */}
            </ul>
        }
        return <h2>Please add a task</h2>
    }
}

export {ListTasks}

export default function ListItems(props) {
    if(props.lists.length) {
        return <ul>
            {props.children};
        </ul>
    }
    return <h2>There is no tasks to show.</h2>
}