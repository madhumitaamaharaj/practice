export const addQuestion = (questionData) => {
  return {
    type: 'ADD_QUESTION',
    payload: questionData,
  };
};

export const deleteQuestion = (questionId) => {
  return {
    type: 'DELETE_QUESTION',
    payload: questionId,
  };
};