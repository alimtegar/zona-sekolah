const initState = {
    authError: null,
};

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case 'SIGNIN_SUCCESS':
            console.log('sign in success');
            return {
                ...state,
                authError: null,
            };

        case 'SIGNIN_ERROR':
            console.log('sign in failed');
            return {
                ...state,
                authError: action.err.message,
            };

        case 'SIGNUP_SUCCESS':
            console.log('sign up success');
            return {
                ...state,
                authError: null,
            };

        case 'SIGNUP_ERROR':
            console.log('sign up failed');
            return {
                ...state,
                authError: action.err.message,
            };

        case 'CHOOSE_SCHOOL_SUCCESS':
            console.log('sign up success');
            return {
                ...state,
                authError: null,
            };

        case 'CHOOSE_SCHOOL_ERROR':
            console.log('sign up failed');
            return {
                ...state,
                authError: action.err.message,
            };

        case 'SIGNOUT_SUCCESS':
            console.log('sign out success');
            return state;

        default:
            return state;
    }
};

export default authReducer;