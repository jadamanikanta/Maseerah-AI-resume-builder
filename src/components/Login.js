import React, { useState } from 'react';
import '../css/Login.css';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const [returningUser, setReturningUser] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirm_password: ''
    });
    const [errors, setErrors] = useState({});
    const [authError] = useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const validateForm = () => {
        const newErrors = {};

        if (!returningUser && !formData.name) {
            newErrors.name = 'Name is required';
        } else if (!/^(?=^.{6,20}$)^[a-zA-Z-]+\s[a-zA-Z-]+$/i.test(formData.name)) {
            newErrors.name = 'Name must be 6 - 20 characters & Minimum 2 words';
        }

        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData.email)) {
            newErrors.email = 'Invalid email address';
        }

        if (!formData.password) {
            newErrors.password = 'Password is required';
        } else if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&;:])[A-Za-z\d@$!%*#?&;:]{8,}$/i.test(formData.password)) {
            newErrors.password = 'Minimum eight characters, at least one letter, one number and one special character';
        }

        if (!returningUser && formData.password !== formData.confirm_password) {
            newErrors.confirm_password = "Passwords don't match.";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            if (returningUser) {
                
                if (formData.email && formData.password) {
                    console.log('Signing in with:', formData.email, formData.password);
                    
                }
            } else {
               
                if (formData.name && formData.email && formData.password) {
                    console.log('Signing up with:', formData.name, formData.email, formData.password);
                    
                }
            }
        }
    };

    return (
        <div className="sign-up">
            <div className="container">
                <div className="text-center py-4">
                    <Link to="/" className="text-info nav-link">
                        <h2>Maseerah AI-resume Builder</h2>
                    </Link>
                </div>
                {
                    returningUser ?
                        <form onSubmit={handleSubmit} className="py-1">
                            <h1 className='lead text-center py-3'>Welcome back!</h1>
                            {authError && <p className="text-danger">* {authError}</p>}

                            <div className="form-group">
                                <input
                                    name="email"
                                    className="form-control"
                                    onChange={handleChange}
                                    placeholder="Email"
                                />
                                {errors.email && <span className="error">{errors.email}</span>}
                            </div>

                            <div className="form-group">
                                <input
                                    type="password"
                                    name="password"
                                    className="form-control"
                                    onChange={handleChange}
                                    placeholder="Password"
                                />
                                {errors.password && <span className="error">{errors.password}</span>}
                            </div>

                            <div className="form-group">
                                <button className="btn btn-primary btn-block" type="submit">
                                    Sign In
                                </button>
                            </div>

                            <div className='text-center my-0'>
                                <label> or </label>
                            </div>

                            <button className='btn btn-success btn-block'>
                                Sign in with Google
                            </button>

                            <div className="option text-center my-3">
                                <label onClick={() => setReturningUser(false)}>
                                    Create a new Account
                                </label>
                            </div>
                        </form>
                        :
                        <form onSubmit={handleSubmit} className="py-2">
                            {authError && <p className="text-danger">* {authError}</p>}

                            <div className="form-group">
                                <input
                                    name="name"
                                    className="form-control"
                                    onChange={handleChange}
                                    placeholder="Name"
                                />
                                {errors.name && <span className="error">{errors.name}</span>}
                            </div>

                            <div className="form-group">
                                <input
                                    name="email"
                                    className="form-control"
                                    onChange={handleChange}
                                    placeholder="Email"
                                />
                                {errors.email && <span className="error">{errors.email}</span>}
                            </div>

                            <div className="form-group">
                                <input
                                    type="password"
                                    name="password"
                                    className="form-control"
                                    onChange={handleChange}
                                    placeholder="Password"
                                />
                                {errors.password && <span className="error">{errors.password}</span>}
                            </div>

                            <div className="form-group">
                                <input
                                    type="password"
                                    name="confirm_password"
                                    className="form-control"
                                    onChange={handleChange}
                                    placeholder="Confirm Password"
                                />
                                {errors.confirm_password && <span className="error">{errors.confirm_password}</span>}
                            </div>

                            <div className="form-group">
                                <button className="btn btn-primary btn-block" type="submit">
                                    Sign Up
                                </button>
                            </div>

                            <div className="option text-center my-3">
                                <label onClick={() => setReturningUser(true)}>
                                    Already Have an Account
                                </label>
                            </div>
                        </form>
                }
            </div>
        </div>
    );
};

export default SignUp;
