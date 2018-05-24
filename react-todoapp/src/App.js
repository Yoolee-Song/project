import React from 'react';

function TodoListItem(props) {
  return (
    <li index={props.index} className={props.isChecked ? 'completed' : ''} >
      <div className="view">
        <input className="toggle" type="checkbox" onChange={props.onChange}/>        
        <label>{props.todoItem}</label>
        <button className="destroy" onClick={props.onClick} />
      </div>
      <input className="edit" value={props.todoItem} />
    </li>
  );
}


class TodoLists extends React.Component {
  render() {
    // console.log(this.props.checkedList);
    const todoItems = this.props.todoItems;
    const listItems = todoItems.map((item, index) => ((
      <TodoListItem 
      isChecked={this.props.checkedList.indexOf(index)!==-1} 
      onChange={() => this.props.onChange(index)} 
      onClick={() => this.props.onClick(index)}
      index={index}
      todoItem={item} 
      />
    )));
    return (
      <ul className="todo-list">
        {listItems}
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
      todoItems: [],
      checkedList: [], 
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
      const prevItems = this.state.todoItems.slice();
      prevItems.push(newItem);
      // console.log(prevItems);
      this.setState({ todoItems: prevItems });
    }
  }

  handleClick(listIndex) {
    console.log("index="+listIndex);
    const prevTodoItems = this.state.todoItems.slice();
    const prevCheckedList = this.state.checkedList.slice();
    prevTodoItems.splice(listIndex,1);
    prevCheckedList.splice(prevCheckedList.indexOf(listIndex),1);
    console.log(prevTodoItems);
    console.log(prevCheckedList);
    this.setState({ todoItems: prevTodoItems, checkedList: prevCheckedList });
  }

  handleChange(listIndex) {
    const prevCheckedList = this.state.checkedList.slice();
    if(prevCheckedList.indexOf(listIndex) === -1) {
      prevCheckedList.push(listIndex); 
      this.setState({ checkedList: prevCheckedList });
      console.log(prevCheckedList);
    }else if(prevCheckedList.indexOf(listIndex) !== -1) {
      prevCheckedList.splice(prevCheckedList.indexOf(listIndex),1);
      this.setState({ checkedList: prevCheckedList });
      console.log(prevCheckedList);
    };
  }

  handleToggle(){
    console.log("click");
    // const prevTodoItems = this.state.todoItems.slice();
    // const allCheckedList = [];
    // prevTodoItems.map((item, i) => allCheckedList.push(i));
    const toggleValue = this.state.istoggle ? false : true;
    this.setState({ istoggle: toggleValue });
    console.log(this.state.istoggle);
  }

  countItemLeft(){
    const wholeItem = this.state.todoItems.length;
    const checkedItem = this.state.checkedList.length;
    const ItemLeft = wholeItem - checkedItem;
    return ItemLeft
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
              checkedList={this.state.checkedList}
              onClick={this.handleClick} 
              onChange={this.handleChange}
              todoItems={this.state.todoItems}
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