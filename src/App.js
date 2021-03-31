import React,{Component} from "react";
import './index.css';
// import 'index.html';

class App extends Component{

  state={
    todoList :[]
  }
  render(){
    return(
      <div>
        <div className='jumbotron jumbotron-fluid py-2'>

          <div className='container'>

            <h1 className='display-2'>Todo App</h1>

          </div>

        </div> 
              <form className="mb-8" onSubmit={this.handleSubmit}>

                <div className="input-group">

                <input type="text" name="todoTask" className="form-control" placeholder="Please Enter Your Task" autoComplete="off"></input>

                <div className="input-group-append">

                <button type="submit" className="btn btn-outline-success">Add</button>

                </div>

                </div>

              </form>

              <ul className="list-group">
              {
                this.state.todoList.map(
                  (item,index)=>{
                    return<li className="list-group-item" key={index}>
                      {item}
                      <button className="btn btn-outline-danger Float-right" autocomplete="off"  onClick={(event)=>{this.deleteTodoTask(event,index)}}>Delete</button>
                    </li>
                  }
                )
              }
                
              </ul>

              
              
            </div>
            
          );
        }

          handleSubmit = (event) => {
            var taskDesc = event.target.elements.todoTask.value;
            if(taskDesc.length > 0)
            {
              this.setState({
                todoList:[...this.state.todoList, taskDesc]
              })
              event.target.reset();

            }
            
            event.preventDefault();
          }
          deleteTodoTask = (event,index)=>{

            var taskArray=[...this.state.todoList]

            taskArray.splice(index,1)

            this.setState({todoList:taskArray})


          }
        }

          export default App;
