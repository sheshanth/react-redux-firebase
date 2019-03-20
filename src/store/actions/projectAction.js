export const createProject = (project) => {
    return (dispatch, getState) => {
        //async function 
        dispatch({
            type: 'CREATE_PROJECT',
            project
        })
    }
}