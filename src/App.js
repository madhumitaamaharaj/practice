import React from 'react';
import { Provider } from 'react-redux';
import '@fortawesome/fontawesome-free/css/all.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminSignIn from './components/AdminSignIn';
import { ToastContainer } from 'react-toastify';
import Question from './components/Question';
import AdminMain from './components/AdminMain';
import 'react-toastify/dist/ReactToastify.css';
import ManageQuestion from './components/ManageQuestion';
import store from './redux/store/store';

function App() {
  return (
    <Provider store={store}>
      <Router>
      
        <Routes>
          <Route path="/" element={<AdminSignIn />} />
          <Route path="/admin-dashboard" element={<AdminMain />} />
          <Route path="/add-question" element={<Question />} />
          <Route path="/manage-question" element={<ManageQuestion />} />
        </Routes>
        <ToastContainer /> 
      </Router>
    </Provider>
  );
}

export default App;