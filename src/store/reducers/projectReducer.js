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
    return state
}

export default projectReducer