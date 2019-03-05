import PropTypes from 'prop-types';
import React, {Component} from 'react';
import 'Task/css/index.css';
class Task extends Component {
  constructor(props){
      super(props);
      this.state={
          title: this.props.title,
          task: this.props.task,
      }
  }
  changeTitle = (e)=>{
      this.setState({title:e.target.value});
  }
  changeTask = (e)=>{
      this.setState({task: e.target.value});
  }
  onSave = ()=>{
      this.props.onSave({...this.state});
  }
  render(){
    return <div className="task">
            
            <input type="text" value={this.state.title} onChange={this.changeTitle} className="task__title"/>
            <textarea onChange={this.changeTask} value={this.state.task} className="task__task"/>
        <div className="task__wrap">    
	    <input type="button" value="Save" onClick={this.onSave.bind(this)}/> <a href="#" onClick={this.props.onDelete.bind(this)}>Delete</a>
        </div>    
	  </div> ;
  }	
}

Task.propTypes = {
  title: PropTypes.string,
  task: PropTypes.string,
  onSave: PropTypes.func,
  onDelete: PropTypes.func,    
}

Task.defaultProps = {
  title: '',
  task : '',
  onSave: ()=>{},
  onDelete: ()=>{},    
}
export default Task;
