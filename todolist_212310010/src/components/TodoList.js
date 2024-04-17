import React, { Component, Fragment } from 'react'
import TodoSearch from './TodoSearch'
import TodoInput from './TodoInput'
import TodoData from './data/TodoData' // 

export default class TodoList extends Component {
    render() {
        const {
            updateTodosToShow,
            clearList,
            handleDelete,
            handleEdit,
            handleDoneTask,
            handleDeleteDoneTasks
        } = this.props

        return (
            <Fragment>
                <h3 className="text-center">
                    TodoList
                </h3>   
                <div className="d-flex justify-content-center">
                        <button 
                            type="button"
                            className="btn btn-info btn-block mt-1 mr-4"
                            style={{ width: '10cm' }} 
                            onClick={() => updateTodosToShow("all")}
                        >
                            All
                        </button>
                        <button 
                            type="button"
                            className="btn btn-info btn-block mt-1 mr-4" 
                            style={{ width: '10cm' }} 
                            onClick={() => updateTodosToShow("done")}
                        >
                            Done
                        </button>
                        <button 
                            type="button"
                            className="btn btn-info btn-block mt-1" 
                            style={{ width: '10cm' }} 
                            onClick={() => updateTodosToShow("todo")}
                        >
                            Todo
                        </button>
                </div>

                {
                TodoData.length === 0 ? '' :
                    <ul className="list-group my-5">
                        {
                            TodoData.map(item => {
                                return (
                                    <TodoInput
                                        key={item.id}
                                        id={item.id}
                                        title={item.item} // Adjusted property name
                                        completed={item.completed} // If completed property exists in your data
                                        handleDelete={() => handleDelete(item.id)}
                                        handleEdit={() => handleEdit(item.id)}
                                        handleDoneTask={handleDoneTask}
                                    />
                                )
                            })
                        }

                        <div className="row mt-4">
                            <div className="col-md-6">
                                <button 
                                    type="button"
                                    className="btn btn-danger btn-block mt-1"
                                    onClick={handleDeleteDoneTasks}
                                >
                                    Delete done tasks
                                </button>
                            </div>
                            <div className="col-md-6">
                                <button 
                                    type="button"
                                    className="btn btn-danger btn-block mt-1"
                                    onClick={clearList}
                                >
                                    Delete all tasks
                                </button>
                            </div>
                        </div>
                    </ul>
                }
            </Fragment>
        )
    }
}
