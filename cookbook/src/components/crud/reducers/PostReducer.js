//* Alexis */
export const initialState = {
    posts: [{
        title: '',
        description: '',
        instructions: '',
        meal_type: ''
    }]
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_POST':
            return {
                ...state,
                posts: action.payload
            }

        default:
            return state;
    }
}