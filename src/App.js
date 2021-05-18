import './App.css';
import AddTask from './AddTaskForm';
import ErrorBoundary from './ErrorBoundary';
import React from 'react';
import ListItems, { ListTasks } from './ListTaskForm';
import {EditFormTask} from './EditTaskForm';
export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: []
    };
    console.log('called', this.state);
  }
  addTask(newTask) {
    const tasks = this.state.tasks.slice(0);
    tasks.push(newTask);
    this.setState({ tasks });
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
  removeTask(i) {
    const tasks = this.state.tasks.slice(0);
    tasks.splice(i, 1);
    this.setState({tasks});
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
  updateTask(i, editedTask) {
    const tasks = this.state.tasks.slice(0);
    tasks.splice(i, 1, editedTask);
    this.setState({tasks});
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
  render() {
    return (<div className="App">
      <h1>Add Tasks</h1>
      <ErrorBoundary>
        <AddTask addTask={(newTask) => this.addTask(newTask)} />
        <ListItems lists={this.state.tasks}>
          {this.state.tasks.map(task => {
                    return <li key={task.title}>
                        <p>{task.title}</p>
                        <EditFormTask removeTask={this.removeTask.bind(this)} updateTask={(index, editedTask) => this.updateTask(index, editedTask)} task={task}></EditFormTask> 
                    </li>
                })}
        </ListItems>
      </ErrorBoundary>
    </div>);
  }
  componentDidMount() {
    console.log('mounted');
    const tasksStringified = window.localStorage.getItem('tasks');
    if (tasksStringified) {
      const tasks = JSON.parse(tasksStringified);
      this.setState({ tasks });
    }
  }
  componentWillUnmount() {
    console.log('unmounted');
  }
}

export default App;
