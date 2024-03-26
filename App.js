import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from './Profile';
import Dashboard from './Dashboard';
import './App.css'; 

function App() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    favoriteSeason: 'Spring',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' }); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    // Validation rules
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!formData.firstName.match(/^[a-zA-Z]+$/)) {
      newErrors.firstName = 'First name should contain only alphabets';
    }
    if (!formData.lastName.match(/^[a-zA-Z]+$/)) {
      newErrors.lastName = 'Last name should contain only alphabets';
    }
    if (!formData.email.match(emailRegex)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.password.match(passwordRegex)) {
      newErrors.password =
        'Password must contain at least 1 Alphabet, 1 Number, 1 Special Character, and 1 Uppercase letter';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      console.log('Form submitted successfully:', formData);
    }
  };

  return (
    <Router>
      <div className="container"> 
        <h2 className="heading">Fill in the form</h2> 
        <Routes>
          <Route path="/" element={
            <form onSubmit={handleSubmit} className="form"> 
              <div className="form-group"> 
                <label>First Name:</label>
                <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} className="input-field" /> 
                {errors.firstName && <div className="error">{errors.firstName}</div>} 
              </div>
              <div className="form-group">
                <label>Last Name:</label>
                <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} className="input-field" />
                {errors.lastName && <div className="error">{errors.lastName}</div>}
              </div>
              <div className="form-group">
                <label>Email:</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} className="input-field" />
                {errors.email && <div className="error">{errors.email}</div>}
              </div>
              <div className="form-group">
                <label>Password:</label>
                <input type="password" name="password" value={formData.password} onChange={handleChange} className="input-field" />
                {errors.password && <div className="error">{errors.password}</div>}
              </div>
              <div className="form-group">
                <label>Favorite Season:</label>
                <select name="favoriteSeason" value={formData.favoriteSeason} onChange={handleChange} className="input-field">
                  <option value="Spring">Spring</option>
                  <option value="Fall">Fall</option>
                  <option value="Winter">Winter</option>
                </select>
              </div>
              <button type="submit" className="submit-btn">Submit</button> 
            </form>
          } />
          <Route path="/profile" element={<Profile />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
