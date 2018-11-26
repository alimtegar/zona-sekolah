const initState = {
  userError: null,
};

const userReducer = (state = initState, action) => {
  switch (action.type) {
      case 'CREATE_TEACHER_SUCCESS':
          console.log('create teacher success');
          return {
              ...state,
              userError: null,
          };
      case 'CREATE_TEACHER_ERROR':
          console.log('create teacher failed');
          return {
              ...state,
              userError: action.err.message,
          };
      default:
          return state;
  }
};

export default userReducer;