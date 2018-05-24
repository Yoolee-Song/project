import React from 'react';

function TodoListItem(props) {
  return (
    <li index={props.index} className={props.isChecked ? 'completed' : ''} >
      <div className="view">
        <input className="toggle" type="checkbox" checked={props.isChecked ? 'checked' : ''} onChange={props.onChange}/>        
        <label>{props.todoItem}</label>
        <button className="destroy" onClick={props.onClick} />
      </div>
      <input className="edit" value={props.todoItem} />
    </li>
  );
}


class TodoLists extends React.Component {
  render() {
    const todoList = this.props.todoList;
    const todoListItems = todoList.map((obj, index) => ((
      <TodoListItem 
      isChecked={todoList[index].isChecked} 
      onChange={() => this.props.onChange(index)} 
      onClick={() => this.props.onClick(index)}
      index={index}
      todoItem={todoList[index].todoItem} 
      />
    )));
    return (
      <ul className="todo-list">
        {todoListItems}
      {/* <TodoListItem todoItem={this.props.todoItem} /> */}
      {/* <li className="completed">
        <div className="view">
          <input className="toggle" type="checkbox" checked />
          <label>Taste JavaScript</label>
          <button className="destroy" />
        </div>
        <input className="edit" value="Create a TodoMVC template" />
      </li> */}
      {/* <li>
        <div className="view">
          <input className="toggle" type="checkbox" />
          <label>Buy a unicorn</label>
          <button className="destroy"></button>
        </div>
        <input className="edit" value="Rule the web" />
      </li> */}
    </ul>
    )
  }
}

class App extends React.Component {
  constructor(props){
    super(props);
    this.ref = React.createRef();
    this.state = { 
      todoList: [
        // { todoItem: ,     
        // isChecked: }
      ],
      istoggle: false,
    };
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.countItemLeft = this.countItemLeft.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleKeyPress(e) {
    if(e.key == 'Enter' && e.target.value !== "") {
      const newItem = e.target.value;
      const prevTodoList = this.state.todoList.slice();
      const pushValue = { todoItem: newItem, isChecked: this.state.istoggle ? true : false};
      prevTodoList.push(pushValue);
      this.setState({ todoList: prevTodoList });
    }
  }

  handleClick(itemIndex) {
    const prevTodoList = this.state.todoList.slice();
    const removedItem = prevTodoList.splice(itemIndex,1);
    this.setState({ todoList: prevTodoList });
  }

  handleChange(itemIndex) {
    const prevTodoList = this.state.todoList.slice();
    prevTodoList[itemIndex].isChecked = prevTodoList[itemIndex].isChecked ? false : true;
    this.setState({ todoList: prevTodoList });
  }

  handleToggle() {
    const prevTodoList = this.state.todoList.slice();
    if(this.state.istoggle){
      var toggleValue =  !this.state.istoggle;
      prevTodoList.map((value, index) => prevTodoList[index].isChecked = toggleValue);
    }else if(!this.state.istoggle){
      var toggleValue =  !this.state.istoggle;
      prevTodoList.map((value, index) => prevTodoList[index].isChecked = toggleValue);
    }
    console.log('토글의 상태는 ' + toggleValue);
    this.setState({ todoList: prevTodoList, istoggle: toggleValue });
  }

  countItemLeft() {
    const prevTodoList = this.state.todoList.slice();
    const wholeItem = this.state.todoList.length;
    const checkedArr = [];
    prevTodoList.map((value, index) => checkedArr.push(prevTodoList[index].isChecked));
    const checkedItem = checkedArr.filter(value => value).length;
    const itemLeft = wholeItem - checkedItem;
    return itemLeft;
  }

  render() {
    return (
      <div>
        <section className="todoapp">
          <header className="header">
            <h1>todos</h1>
            <input 
              className="new-todo" 
              placeholder="What needs to be done?" 
              onKeyPress={this.handleKeyPress}
              autofocus 
            />
          </header>
          <section className="main">
            <input id="toggle-all" className="toggle-all" type="checkbox" />
            <label htmlFor="toggle-all" onClick={this.handleToggle}>Mark all as complete</label>
            <TodoLists
              todoList={this.state.todoList}
              onClick={this.handleClick} 
              onChange={this.handleChange}
            />
          </section>
          <footer className="footer">
            <span className="todo-count"><strong>{this.countItemLeft()}</strong> item left</span>
            <ul className="filters">
              <li>
                <a className="selected" href="#/">All</a>
              </li>
              <li>
                <a href="#/active">Active</a>
              </li>
              <li>
                <a href="#/completed">Completed</a>
              </li>
            </ul>
            <button className="clear-completed"></button>
          </footer>
        </section>
      </div>
    );
  }
}


export default App;