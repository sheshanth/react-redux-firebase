import React from 'react'

const ProjectDetails = (props) => {

    const id = props.match.params.id

    return (
        <div>
            <div className="section project-details container ">
                <div className="card z-depth-0">
                    <span className="card-title">Project Title - {id} </span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi beatae dignissimos porro voluptates voluptatibus eius ab nemo dolorum dicta eos illo quasi error, veniam ratione consectetur quidem, corporis, minus debitis.</p>
                </div>
                <div className="card-action grey lighten-4 text-grey">
                    <div>Posted by Net Ninja</div>
                    <div>18 March, 4pm</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails
