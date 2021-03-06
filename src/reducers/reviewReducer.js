const initState = {
    reviewError: null,
};

const reviewReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_REVIEW_SUCCESS':
            console.log('create review success');
            return {
                ...state,
                reviewError: null,
            };
        case 'CREATE_REVIEW_ERROR':
            console.log('create review failed');
            return {
                ...state,
                reviewError: action.err.message,
            };
        default:
            return state;
    }
};

export default reviewReducer;