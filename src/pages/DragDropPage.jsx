import React, { Component } from 'react';
import { List } from 'components'

export default class HomePage extends Component {
  state = {
    task: [
        {name: 'Angular', class: 'yellow', status: 'new'},
        {name: 'React', class: 'green', status: 'new'},
        {name: 'Vue', class: 'red', status: 'completed'}
    ]
  }

  allowDrag = (event) => {
    event.preventDefault();
  }

  startDrag = (event, index) => {
    event.dataTransfer.setData('id', index);
  }

  moveItem = (event, status) => {
    let id = event.dataTransfer.getData('id');
    let tasks = this.state.task.map((task, index) => {
      if (id == index) {
        task.status = status;
      }
      return task;
    });
    let task = tasks[id];
    tasks.splice(id, 1);
    tasks.push(task);
    this.setState({
      task: tasks
    });
  }

  renderTask = (status) => {
    return this.state.task.filter(item => item.status === status).map((item, index) =>
        <div key={index} draggable className="dropdrap__zone__item" onDragStart={(e) => this.startDrag(e, index)}>
          <p>{item.name}</p>
          <div draggable className="dropdrap__zone__draggable-icon">+</div>
        </div>
    )
  }

  render() {
    let task_render = {
      new: [],
      completed: []
    };
    this.state.task.forEach((item, index) => {
      task_render[item.status].push(
        <div key={index} draggable className="dropdrap__zone__item" onDragStart={(e) => this.startDrag(e, index)}>
          <p>{item.name}</p>
          <div draggable className="dropdrap__zone__draggable-icon">+</div>
        </div>
      )
    })
    return (
      <div className="dropdrap">
          <div className="dropdrap__zone" onDragOver={this.allowDrag} onDrop={(e) => this.moveItem(e, 'new')}>
            {task_render.new}
        </div>
        <div className="dropdrap__zone" onDragOver={this.allowDrag} onDrop={(e) => this.moveItem(e, 'completed')}>
          {task_render.completed}
        </div>
      </div>
    )
  }
}
