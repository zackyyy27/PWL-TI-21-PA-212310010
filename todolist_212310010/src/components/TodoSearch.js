import React, { Component } from 'react'



export default class TodoSearch extends Component {
    render() {
        const { item, handleChange, handleSubmit, editItem } = this.props  

        return (
            <div className="card card-body my-3">
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text bg-info text-white">
                                <i className="fas fa-search" />
                            </div>
                        </div>

                        <input
                            type="text"
                            className="form-control"
                            placeholder=""
                            value={item}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="d-flex justify-content-between">
                        <button 
                            type="button"
                            className="btn btn-info mt-3 btn-lg" // Mengatur ukuran tombol menjadi lg
                            onClick={() => {}} // Fungsi onClick belum ditambahkan
                        >
                         Search
                        </button>

                        <button 
                            type="submit"
                            className={`btn mt-3 ${editItem ? 'btn-success' : 'btn-info'}`}
                        >
                            {editItem ? 'Edit task' : 'Add new task'}
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}
