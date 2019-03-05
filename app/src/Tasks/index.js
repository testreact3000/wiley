import PropTypes from 'prop-types';
import Task from 'Task';
import TaskList from 'TaskList';
import React, {Component} from 'react';
import 'Tasks/css/index.css';
import _ from 'lodash';
class TaskApp extends Component{
   constructor(props){
     super(props);
     this.state={
         tasks: this.props.tasks,
         task: this.props.task,
     }
     this.handleChange = this.handleChange.bind(this);
   }
   get value(){
       return {
                tasks: this.state.tasks,
                task: this.state.task,
              }
   }  
   handleChange(task){
       this.setState({task: task.task},()=>{
          // this.props.change(this)
          console.log('T',task, this.state.task);
       });
   }
   handleSave = (task)=>{
     
       let tasks = [...this.state.tasks];
       Object.assign(tasks[this.state.task],task);
       this.setState({tasks},()=>{
           this.props.onSave(this.state);
           console.log(this);
       });
   }
   handleDelete = ()=>{
       this.setState((prevState)=>({
           tasks: prevState.tasks.filter((x,id)=>id!==prevState.task),
           task: -1
       }),()=>{
          this.props.onSave(this.state);
          console.log(this.state);
       });
       
   }
   handleNewTask =() =>{
       let tasks = [...this.state.tasks];
       tasks.push({title:''})
       this.setState({tasks, task: tasks.length - 1 });
       
   }
   render(){
      let task;
      let tasklist = <TaskList 
          tasks={this.state.tasks}  
          change={this.handleChange} 
          task={this.state.task} 
          key={'tasklist'+this.state.tasks.length}
      />;
      let newtask;
      if(this.state.task!=-1){
          task = <Task 
          title={this.state.tasks[this.state.task].title} 
          task={this.state.tasks[this.state.task].task}
          key={'task'+this.state.task}
          id={this.state.task} 
          onSave={this.handleSave.bind(this)}
          onDelete={this.handleDelete}
          /> 
      }
      newtask =<input type="button" value="New Task" onClick={this.handleNewTask}/>
      
      return <div className="tasksroot">
        {newtask}
        <div class="taskswrap">
            {tasklist}
            {task}
        </div>
    
      </div>
   }
}
    
TaskApp.propTypes = {
  tasks: PropTypes.array,
  task: PropTypes.number,
  change: PropTypes.func,
  onSave: PropTypes.func,      
}

TaskApp.defaultProps = {
  tasks: [],
  task : -1,
  change: ()=>{}
}

export default TaskApp;
