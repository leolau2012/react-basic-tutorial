import Task from '../../components/Task/Task';
import React, { Component } from 'react'
class TaskList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isShow:true,
      taskLists: this.props.taskLists
    }
  }
  changeTaskShow(){
    this.setState({isShow:!this.state.isShow});
  }
  render(){
    const {isShow,taskLists} = this.state;
    const listItem = isShow?taskLists.map((task, index) =>
      <Task key={index} task = {task.new_task} />
    ):'';
    return (
      <div className="TaskList">
        <input type="button" value="最近完成的任务" onClick ={this.changeTaskShow.bind(this)} />
        <ul>{listItem}</ul>
      </div>
    )
  }
}
export default TaskList;
