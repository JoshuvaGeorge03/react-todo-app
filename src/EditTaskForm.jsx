import React, {Component} from 'react';

export class EditFormTask extends Component {
    constructor(props){
        super(props);
        this.state = {
            isEditingSelected: false
        };
    }
    removeFromList(i) {
        this.props.removeTask(i);
    }
    render() {
        const {task} = this.props;
        return this.state.isEditingSelected ? <form action="#" method="get" onSubmit={(e) => {
            e.preventDefault();
            console.log(e);
        }}>
            <h2>Edit {task.title} task</h2>
            <div>
                <label htmlFor="editTaskTitle">Title</label>
                <input required type="text" name="editTaskTitle" id="editTaskTitle" defaultValue={task.title}/>
            </div>
            <div>
                <label htmlFor="editTaskDescription">Description</label>
                <textarea required name="editTaskDescription" id="editTaskDescription" cols="30" rows="10" defaultValue={task.description}></textarea>
            </div>
            <div>
                <label htmlFor="editTaskReminder">Reminde me at</label>
                <input required defaultValue={task.reminder} type="datetime-local" name="editTaskReminder" id="editTaskReminder"/>
            </div>
            <div>
                <button type="submit">Edit</button>
                <button onClick={e => this.setState({isEditingSelected : false})}>Cancel</button>
            </div>
        </form> : <><button onClick={this.removeFromList.bind(this)}>Remove</button>
                        <button onClick={e => this.setState({isEditingSelected: !this.state.isEditingSelected})}>Edit</button></>
    }
}

export function EditFormTask2(props) {
    const {task} = props;
    return <form action="#" method="get" onSubmit={(e) => {
        e.preventDefault();
        console.log(e)
    }}>
        <h2>Edit {task.title} task</h2>
        <div>
            <label htmlFor="editTaskTitle">Title</label>
            <input required type="text" name="editTaskTitle" id="editTaskTitle" defaultValue={task.title}/>
        </div>
        <div>
            <label htmlFor="editTaskDescription">Description</label>
            <textarea required name="editTaskDescription" id="editTaskDescription" cols="30" rows="10" defaultValue={task.description}></textarea>
        </div>
        <div>
            <label htmlFor="editTaskReminder">Reminde me at</label>
            <input type="datetime-local" name="editTaskReminder" id="editTaskReminder"/>
        </div>
        <div>
            <button type="submit">Edit</button>
        </div>
    </form>
}