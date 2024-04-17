import React, { Component } from 'react';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoSearch';


class App extends Component {
  state = {
    id: 0,
    item: '',
    editItem: false,
    items: [],
    itemsToShow: 'all'
  };

  handleChange = event => {
    this.setState({
      item: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    const newItem = {
      id: this.state.id,
      title: this.state.item,
      completed: false
    };

    const updatedItems = [...this.state.items, newItem];

    this.setState({
      items: updatedItems,
      id: this.state.id + 1,
      item: '',
      editItem: false
    });
  };

  updateTodosToShow = string => {
    this.setState({
      itemsToShow: string
    });
  };

  handleDoneTask = (id, completed) => {
    const filteredItems = this.state.items.map(item => {
      if (item.id === id) {
        item.completed = !item.completed;
      }
      return item;
    });

    this.setState({
      items: filteredItems
    });
  };

  handleDelete = id => {
    const filteredItems = this.state.items.filter(item => item.id !== id);

    this.setState({
      items: filteredItems
    });
  };

  handleEdit = id => {
    const selectedItem = this.state.items.find(item => item.id === id);

    this.setState({
      id: id,
      item: selectedItem.title,
      editItem: true
    });
  };

  handleDeleteDoneTasks = () => {
    const filteredItems = this.state.items.filter(item => !item.completed);

    this.setState({
      items: filteredItems
    });
  };

  clearList = () => {
    this.setState({
      items: []
    });
  };

  render() {
    let items = [];

    if (this.state.itemsToShow === 'all') {
      items = this.state.items;
    } else if (this.state.itemsToShow === 'todo') {
      items = this.state.items.filter(item => !item.completed);
    } else if (this.state.itemsToShow === 'done') {
      items = this.state.items.filter(item => item.completed);
    }

    return (
      <div className="container">
        <div className="row">
          <div className="col-10 col-md-8 mx-auto mt-4">
            <h3 className="text-capitalize text-center">Todo Search</h3>
            <TodoInput
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
            />
            <TodoList
              items={items}
              filterDoneTasks={this.filterDoneTasks}
              clearList={this.clearList}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
              handleDoneTask={this.handleDoneTask}
              handleDeleteDoneTasks={this.handleDeleteDoneTasks}
              updateTodosToShow={this.updateTodosToShow}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
