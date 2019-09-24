//* Alexis */
export const initialState = {
    chefs: [{
        first_name: '',
        last_name: '',
        location: '',
        contact: '',
        username: '',
        password: '',
        email_address: '',
        avatar_url: ''
    }]
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_CHEF':
            return {
                ...state,
                chefs: action.payload
            }

        default:
            return state;
    }
}