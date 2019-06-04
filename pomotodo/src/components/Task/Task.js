import React, { Component } from 'react'
class Task extends Component {
    constructor(props){
        super(props);
        const {task,isOver,index} = this.props;
        this.state = {
            task,
            isOver,
            index
        }
    }
    changeOver (isOver){
        this.setState({
            isOver:!isOver
        });
    }
    render() {
        const {task,isOver,index} = this.state;
        console.log(isOver);
        return (
            <li key={index}><input type="checkbox" defaultChecked={isOver} onChange={()=>this.changeOver(isOver)} />{task}</li>
        );
    }
}
export default Task;
