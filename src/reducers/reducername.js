
const defaultState = {
    username:'',
    password:''

}

export const userReducer = (state=defaultState, action) => {
    switch (action.type) {
        case "SETUSERNAME" :
            return {
                ...defaultState, username: action.username
            }
            case "set" :
            return state.username;
            default : 
            return state


    }
}