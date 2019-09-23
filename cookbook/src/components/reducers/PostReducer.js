export const initialState = {
    post: [{
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
                post: action.payload
            }

        default:
            return state;
    }
}