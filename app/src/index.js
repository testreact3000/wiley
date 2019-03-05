import React from 'react';
import ReactDOM from 'react-dom';
import TaskList from 'TaskList';
import Tasks from 'Tasks';
import registerServiceWorker from './registerServiceWorker';
import UniversalRouter from 'universal-router';
const store = require('store');




function saveList(data){
 store.set('tasks', JSON.stringify(data));
}
const routes = [ 
	{ 
	  path : "/", 
          async action({params,next}) {
	      
          params.tasks= [{title:'task3'},{title: 'task1'},{title:'task2'}];
	      return await next();	      
	  }, 
	  children : [
	    
            {
              path: '/tasks',
              action: (context,{tasks}) => <TaskList tasks={tasks} />
            },
            { 
	      path: '(.*)',
	      action: (context, {tasks}) => {
              let data = store.get('tasks');
		      if(data!==undefined){
			    data = JSON.parse(data);
		      }else{
                data = {};
              }
              
	       	      return <Tasks tasks={data.tasks} change={saveList} task={data.task} onSave={saveList}/>;
	    }
	    
	    }		  
	  ]
	 } ]; 

const router = new UniversalRouter(routes);

router
  .resolve({pathname:window.location.pathname})
  .then((rootComponent) => {
    ReactDOM.render(rootComponent, document.getElementById('root'));
    registerServiceWorker();
  });
