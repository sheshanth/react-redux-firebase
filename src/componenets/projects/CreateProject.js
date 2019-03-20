import React, { Component } from 'react'
import { connect } from 'react-redux';

import { createProject } from '../../store/actions/projectAction'

export class CreateProject extends Component {

    state = {
        title: '',
        content: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.createProject(this.state)
    }

    render() {
        return (
            <div className="create-project container">
                <form className="white" onSubmit={this.handleSubmit} >
                    <h5 className="grey-text text-darken-3 ">Create New Project</h5>
                    <div className="input-field">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="content">Content</label>
                        <textarea id = "content" className = "materialize-textarea" onChange = {this.handleChange}></textarea>
                    </div>
                    <div className="input-field">
                        <button className="btn green lighten-1 z-depth-0">Create</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createProject: (project) => dispatch(createProject(project))
    }
}

export default connect(null, mapDispatchToProps)(CreateProject)
