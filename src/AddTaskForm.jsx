import './taskForm.css';

import React from 'react';


export default class AddTaskForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            agreedToEmailNotification: false
        };
    }
    handleChange(e) {
        this.setState({agreedToEmailNotification: e.target.checked});
    }
    handleSubmit(e) {
        console.log(e);
        e.preventDefault();
        const {taskTitle, taskDescription, taskReminder, priority:priorityEl, taskMail} = e.target.elements;
        const title = taskTitle.value;
        const description = taskDescription.value;
        const priority = priorityEl.value;
        const reminder = taskReminder.value;
        const mail = taskMail && taskMail.value;
        this.props.addTask({title,description,priority,reminder,mail});
    }
    render() {
        const {agreedToEmailNotification: agreed} = this.state;
        return <form action="#" onSubmit={this.handleSubmit.bind(this)}>
            <div className="addTaskTitle">
                <label htmlFor="taskTitle">Title</label>
                <input placeholder="Title of task" required type="text" name="taskTitle" id="taskTitle"/>
            </div>
            <div style={{padding: '10px'}} className="addTaskDescription">
                <label htmlFor="taskDescription">Description</label>
                <textarea placeholder="Explain about a task" required name="taskDescription" id="taskDescription" cols="30" rows="10"></textarea>
            </div>
            <div className="addTaskReminder">
                <label htmlFor="taskReminder">Remind me At</label>
                <input required type="datetime-local" name="taskReminder" id="taskReminder"/>
            </div>
            <div className="taskNotification">
                <input onChange={e => this.handleChange(e)} value="agreed" type="checkbox" name="taskNotification" id="taskNotification"/>
                <label htmlFor="taskNotification">Agree to Email Reminder</label>
            </div>
            {agreed && <div className="taskEmail">
                            <label htmlFor="taskMail">Mail Id</label>
                            <input type="email" name="taskMail" id="taskMail"/>
                        </div>}
            <div>
                <fieldset>
                    <legend>Choose your Prority</legend>
                    <input value="low" type="radio" name="priority" id="taskLowPrority"/>
                    <label htmlFor="taskLowPrority">Low</label>
                    <input value="medium" type="radio" name="priority" id="taskMediumPriority"/>
                    <label htmlFor="taskMediumPriority">Medium</label>
                    <input value="high" type="radio" name="priority" id="taskHighPriority"/>
                    <label htmlFor="taskHighPriority">High</label>
                </fieldset>
            </div>
            <div>
                <button type="submit">Add Task</button>
            </div>
        </form>
    }
}