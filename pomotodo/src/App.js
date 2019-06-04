import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import TaskInput from './components/TaskInput/TaskInput';
import TaskList from './components/TaskList/TaskList';
import TaskOverList from './components/TaskOverList/TaskOverList';
import React, { Component } from 'react'
import './App.css'
class App extends Component{
  constructor(props) {
    super(props)
    this.state = {
      taskLists: []
    }
  }
  handleAddSubmit(ev){
    const taskLists = this.state.taskLists.push(ev)
     this.setState({...taskLists,ev});
  }
  handleChangeSubmit(ev){
   console.log(ev);
  }
  render(){
    const taskLists = this.state.taskLists;
    return (
      <div className="App">
          <Header/>
          <TaskInput onAddSubmit = {this.handleAddSubmit.bind(this)}/>
          <TaskList  taskLists = {taskLists} onChangeSubmit = {this.handleChangeSubmit.bind(this)} />
          <TaskOverList taskLists = {taskLists}/>
          <Footer/>
      </div>
    );
  }
}
export default App;
