
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { setAdminEmail, setAdminPassword } from '../redux/actions/userActions';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getCredentials } from '../utils/localStorage';
import '../styles/AdminSignIn.css';


const AdminSignIn = () => {
 
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const adminEmail = useSelector((state) => state.admin.adminEmail);
  const adminPassword = useSelector((state) => state.admin.adminPassword);
  const showPassword = useSelector((state) => state.admin.showPassword);

 
  const storedCredentials = getCredentials();


  const formik = useFormik({
    initialValues: {
      email: storedCredentials ? storedCredentials.email : '',
      password: '',
      userType: 'admin',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Email is required'),
      password: Yup.string()
        .min(8, 'Password must be at least 8 characters')
        .required('Password is required'),
    }),
    onSubmit: (values) => {
      
      if (values.email === 'admin@test' && values.password === '14141414') {
       
        dispatch(setAdminEmail(values.email));
        dispatch(setAdminPassword(''));

        toast.success('Admin Login Successful!');

      
        navigate('/admin-dashboard');
      } else {
     
        toast.error('Invalid email or password. Please try again.');
      }
    },
  });

  console.log('adminEmail:', adminEmail);
  console.log('adminPassword:', adminPassword);
  console.log('showPassword:', showPassword);
  console.log('Stored Credentials:', storedCredentials);

  
  const renderUserAvatar = () => {
    if (formik.values.userType === 'admin') {
      return <i className="fas fa-user-tie"></i>;
    } else {
      return <i className="fas fa-user"></i>;
    }
  };

 
  return (
    <div className="container">
      <div className="form-container">
        <form onSubmit={formik.handleSubmit}>
          <div className="avatar-container">{renderUserAvatar()}</div>
          <div className="form-group">
            <div className="user-type-row">
              <label>
                <input
                  type="radio"
                  name="userType"
                  value="admin"
                  checked={formik.values.userType === 'admin'}
                  onChange={formik.handleChange}
                />
                Admin
              </label>
              <label>
                <input
                  type="radio"
                  name="userType"
                  value="student"
                  checked={formik.values.userType === 'student'}
                  onChange={formik.handleChange}
                />
                Student
              </label>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="email" className="label">
              Email:
            </label>
            <input
              type="text"
              placeholder='Enter Email Id'
              className="form-control input"
              id="email"
              {...formik.getFieldProps('email')}
            />
            {formik.touched.email && formik.errors.email && (
              <div className="error">{formik.errors.email}</div>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="password" className="label">
              Password:
            </label>
            <div className="password-input">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder='Enter Password'
                className="form-control input"
                id="password"
                {...formik.getFieldProps('password')}
              />
              <span className={`password-toggle ${showPassword ? 'visible' : ''}`}>
                {showPassword ? (
                  <i className="fas fa-eye-slash"></i>
                ) : (
                  <i className="fas fa-eye"></i>
                )}
              </span>
            </div>
            {formik.touched.password && formik.errors.password && (
              <div className="error">{formik.errors.password}</div>
            )}
          </div>
          <button type="submit" className="btn btn-primary button bold-text">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminSignIn;
