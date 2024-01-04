import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addQuestion } from '../redux/actions/questionActions';
import Head from './Head';
import Sidebar from './Sidebar';
import styles from '../styles/Question.module.css';

const Question = () => {
  const dispatch = useDispatch();
  const questionsFromRedux = useSelector((state) => state.question?.questions) || [];
  const [formData, setFormData] = useState({
    subject: 'java',
    marks: '',
    duration: '',
    timing: '',
    date: '',
    time: '',
    questions: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAddQuestion = () => {
    if (formData.questions.length < 5) {
      setFormData((prevData) => ({
        ...prevData,
        questions: [...prevData.questions, { title: '', options: ['', '', '', ''], answer: '' }],
      }));
    }
  };

  const handleQuestionChange = (index, field, value) => {
    const updatedQuestions = [...formData.questions];
    updatedQuestions[index][field] = value;

    setFormData((prevData) => ({
      ...prevData,
      questions: updatedQuestions,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    
    dispatch(addQuestion(formData));

  
    setFormData({
      subject: 'java',
      marks: '',
      duration: '',
      timing: '',
      date: '',
      time: '',
      questions: [],
    });
  };

  return (
    <div>
    <Head/>
    <Sidebar/>
    <div className={styles.container}>
   
      <div className={styles.wrapper}>
     
        <form onSubmit={handleSubmit}>
        <label className={styles['form-label']}>
            Subject:
            <select
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className={styles['form-input']}
          >
              <option value="java">Java</option>
              <option value="python">Python</option>
              <option value="cpp">C++</option>
              <option value="ds">Data Science</option>
              <option value="dm">Digital Marketing</option>
              <option value="kotlin">Kotlin</option>
              <option value="ui-ux">UI-UX Design</option>
              <option value="td">Textile Design</option>
              <option value="mern">MERN Stack</option>
              <option value="od">Odissi Dance</option>
              <option value="kd">Kathak Dance</option>
              <option value="bd">Bharatnatyam Dance</option>
              <option value="sma">Stock Market Analysis</option>
            </select>
          </label>
          <br />

          <label className={styles['form-label']}>
            Marks:
            <input
                type="number"
                name="marks"
                value={formData.marks}
                onChange={handleChange}
                className={styles['form-input']}
              />
          </label>
          <br />

          <label className={styles['form-label']}>
            Duration (in Minutes):
            <input
              type="number"
              name="duration"
              value={formData.duration}
              onChange={handleChange}
            />
          </label>
          <br />
          <label className={styles['form-label']}>
            Timing (in seconds):
            <input
              type="number"
              name="timing"
              value={formData.timing}
              onChange={handleChange}
            />
          </label>
          <br />

          <label className={styles['form-label']}>
            Date:
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
            />
          </label>
          <br />

          <label className={styles['form-label']}>
            Time:
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
            />
          </label>
          <br />

          <button type="button" className={`btn ${styles['form-button']}`} onClick={handleAddQuestion}>
            Add Question
          </button>
<br/>
<br/>
<div>
{formData.questions.map((question, index) => (
  <div className={styles['question-container']} key={index}>
    <label className={styles['form-label']}>
      Question Title:
      <input
        type="text"
        value={question.title}
        onChange={(e) =>
          handleQuestionChange(index, 'title', e.target.value)
        }
        className={styles['form-input']}
      />
    </label>
    <br />
    {question.options.map((option, optionIndex) => (
      <label className={styles['form-label']} key={optionIndex}>
        Option {optionIndex + 1}:
        <input
          type="text"
          value={option}
          onChange={(e) =>
            handleQuestionChange(index, 'options', [
              ...question.options.slice(0, optionIndex),
              e.target.value,
              ...question.options.slice(optionIndex + 1),
            ])
          }
          className={styles['form-input']}
        />
      </label>
    ))}
    <br />
    <label className={styles['form-label']}>
      Answer:
      <input
        type="text"
        value={question.answer}
        onChange={(e) =>
          handleQuestionChange(index, 'answer', e.target.value)
        }
        className={styles['form-input']}
      />
    </label>
    
  </div>
))}
</div>

<button type="submit" className={`btn ${styles['form-button']}`}>
Submit
</button>
</form>
</div>
</div>
</div>
);
};

export default Question;
           