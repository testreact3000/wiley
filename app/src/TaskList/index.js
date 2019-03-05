import PropTypes from 'prop-types';
import React, { Component } from 'react';
import 'TaskList/css/index.css';


class TaskList extends Component {
  constructor(props){
     super(props);
     this.state = {
       task: props.task,	     
       tasks: props.tasks,
       change: props.change,
     }
     this.handleSelectTask = this.handleSelectTask.bind(this);
  }
  get value () {
     return {
        task: this.state.task,
     }
  }	
  handleSelectTask(task){
    this.setState({task}, () => {
      this.state.change(this.value);
    });	  
  }
  componentDidMount(){
    //this.loadCityWeather(this.state.city);
  }	
  render() {
    let tasks = this.state.tasks.map((x,id)=>({...x,id, current: id == this.state.task})).sort((a,b)=>(a.title===b.title)?0:((a.title<b.title)?1:-1)).map((x,id)=>{
       
       return <li key={id} onClick={this.handleSelectTask.bind(null,x.id)} className={`tasks__item tasks__item-current-${(x.current)?'true':'false'}`}>{x.title}</li>;
    })
    
    return <ul className="tasks">
	       {tasks}
           </ul>
    
  }

}

TaskList.propTypes = {
  tasks: PropTypes.array,
  task: PropTypes.number,
  change: PropTypes.func,
}

TaskList.defaultProps = {
  tasks: [],
  task : -1,
  change: ()=>{}
}
export default TaskList;
