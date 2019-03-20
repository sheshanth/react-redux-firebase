const initState = {
    projects: [
        {
            id: 1,
            title: "java-demo",
            content: "Hello, world! on console"
        },
        {
            id: 2,
            title: "spring-demo",
            content: "Hello, world! on console"
        },
        {
            id: 3,
            title: "react-demo",
            content: "Hello, world! web page"
        }
    ]
}

const projectReducer = (state = initState, action) => {

    switch (action.type) {
        case "CREATE_PROJECT": 
            console.log("project created", action.project);
            const { title, content } = action.project
            state.projects = [
                ...state.projects,{
                    id: 4,
                    title,
                    content
                }
            ]
            console.log(state);
            break;

        default: 
            console.log("No actions created")
    }

    return state
}

export default projectReducer