const initialState = {
    subject: '',
    marks: '',
    duration: '',
    timing: '',
    date: '',
    time: '',
    questions: [],
  };
 
  const questionReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_QUESTION':
        return {
          ...state,
          questions: [...state.questions, action.payload],
        };
      case 'DELETE_QUESTION':
        const updatedQuestions = state.questions.filter(
          (question) => question.id !== action.payload
        );
        return {
          ...state,
          questions: updatedQuestions,
        };
      default:
        return state;
    }
  };
  
  export default questionReducer;
  