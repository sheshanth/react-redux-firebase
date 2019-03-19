import React from 'react'

const ProjectSummary = ({ project })  =>{
    return (
        <div className = "project-summary ">
            <div className = "card z-depth-0 project-summary">
                <div className = "card-content grey-text text-darken-3">
                    <span className = "card-title">{ project.title }</span>
                    <p>{project.content}</p>
                    <p className = "text-grey" >18 March, 3pm</p>
                </div>
            </div>
        </div>
    )
}

export default ProjectSummary