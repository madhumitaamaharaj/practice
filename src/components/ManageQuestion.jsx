import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteQuestion } from '../redux/actions/questionActions';
import Head from './Head';
import Sidebar from './Sidebar';
import styles from '../styles/ManageQuestion.module.css';

const ManageQuestion = () => {
  const dispatch = useDispatch();
  const questionsFromRedux = useSelector((state) => state.question?.questions) || [];

  // State for storing the selected question for editing
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  // Function to handle editing a question
  const handleEditQuestion = (question) => {
    // Set the selected question for editing
    setSelectedQuestion(question);
  };

  // Function to handle deleting a question
  const handleDeleteQuestion = (questionId) => {
    // Dispatch the deleteQuestion action
    dispatch(deleteQuestion(questionId));
  };

  // Function to clear the selected question after editing
  const clearSelectedQuestion = () => {
    setSelectedQuestion(null);
  };

  useEffect(() => {
    // Additional logic to fetch questions if needed
  }, []);

  return (
    <div>
      <Head />
      <Sidebar />
      <div className={styles.container}>
        <h2>Manage Question Bank</h2>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Subject</th>
              <th>Marks</th>
              {/* Add more table headers based on your question data structure */}
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {questionsFromRedux.map((question) => (
              <tr key={question.id}>
                <td>{question.subject}</td>
                <td>{question.marks}</td>
                {/* Add more table cells based on your question data structure */}
                <td>
                  <button onClick={() => handleEditQuestion(question)}>
                    Edit
                  </button>
                </td>
                <td>
                  <button onClick={() => handleDeleteQuestion(question.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Additional component for editing the selected question */}
        {selectedQuestion && (
          <div className={styles.editContainer}>
            <h3>Edit Question</h3>
            {/* Add your form fields for editing the selected question */}
            {/* Use the selectedQuestion state for pre-filling the form */}
            <button onClick={clearSelectedQuestion}>Cancel Edit</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageQuestion;
