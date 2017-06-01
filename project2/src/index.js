import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class ToDoListTable extends React.Component{
	//Container of everything
	render(){
		return(
			<table>
		        <thead>
		          	<tr>
		          		<td>+</td>
		            	<input type="text" placeholder = "Add ToDo List"></input>
		            	
		          	</tr>
		          	<tr>
		          		<td>item 1</td>
		          	</tr>
		          	<tr>
		            	<td>item 2</td>
		            </tr>
		            <tr>
		            	<td>item 3</td>
		            </tr>
		            <tr>
		            	<td>item 4</td>
		            </tr>
		            <tr>
		            	<td>item 5</td>
		           	</tr>
		        </thead>
		        <tbody></tbody>
		    </table>
			)
	}
}


class Item extends React.Component{
	// Every entry of the todo list
	handleClick(){
		return;
	}

	render(){
		return(
			<div className = "item" onClick = {()=>this.handleClick()}/>
		)
	}
}

class Button extends React.Component{
	// clickable icons
	handleClick(){
		return;
	}

	render(){
		return(
			<div className = "button" onClick = {()=>this.handleClick()}/>
		)
	}
}

ReactDOM.render(
	<ToDoListTable/>,
	document.getElementById('root')
);