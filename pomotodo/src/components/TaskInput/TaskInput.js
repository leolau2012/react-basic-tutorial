import React, { Component } from 'react'
class TaskInput extends Component {
  constructor() {
    super()
    this.state = {
      new_task: '',
      isOver:false
    }
  }
  handleChangeTask = (ev) => {
    this.setState({
      new_task: ev.target.value
    })
  }
  handleAddTask = (ev) => {
    if (ev.keyCode === 13) {
      const {new_task,isOver} = this.state;
      this.props.onAddSubmit({new_task,isOver});
      this.setState({ new_task: new_task,isOver:false })
      this.setState({ new_task: '' })
    }
  }
  render() {
    return (
      <div className="TaskInput">
        <input placeholder="添加新任务" value={this.state.new_task} onChange={this.handleChangeTask} onKeyUp={this.handleAddTask} />
      </div>
    )
  }
}

export default TaskInput;
