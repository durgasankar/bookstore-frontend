import React, { useState } from 'react';
import '../assets/css/registration.css';
import bookstore_logo from '../assets/images/bookstore-logo.png';
import Box from '@mui/material/Box';
import { Link } from "react-router-dom";
import CustomTextInput from '../components/common/CustomTextInput';
import CustomRadioButton from '../components/common/CustomRadioButton';
import CustomButton from '../components/common/CustomButton';
import { hasPasswordMatched, isValidEmail } from '../utils/Validation';
import { registerUser } from '../services/authService';
import useToast from '../hooks/useToast';

const Registration = () => {
    const { successToast, errorToast } = useToast();

    const [signupForm, setSignupForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
        mobileNumber: '',
        gender: '',
        password: '',
        confirmPassword: ''
    });
    const [errors, setErrors] = useState({});


    const formValidator = () => {
        const newErrors = {};
        Object.keys(signupForm).forEach(field => {
            if (!signupForm[field]) {
                newErrors[field] = `Field is required.`
            }
        })
        if (signupForm.email && !isValidEmail(signupForm.email)) {
            newErrors['email'] = 'Enter a valid email address';
        }
        if (!hasPasswordMatched(signupForm.password, signupForm.confirmPassword)) {
            newErrors['confirmPassword'] = 'Passwords do not match';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    const handleSubmit = async event => {
        event.preventDefault();
        const isValid = formValidator();
        if (!isValid) return;
        const payload = {
            firstName: signupForm.firstName,
            lastName: signupForm.lastName,
            email: signupForm.email,
            mobileNumber: signupForm.mobileNumber,
            gender: signupForm.gender,
            password: signupForm.password
        }
        try {
            const response = await registerUser(payload);
            successToast(response?.message);
        } catch (error) {
            errorToast(error?.message || "Something went wrong");
        }
    }

    const handleChange = event => {
        const { name, value } = event.target;
        setSignupForm(prevForm => ({
            ...prevForm,
            [name]: value
        }));
        setErrors(prevErrors => ({
            ...prevErrors,
            [name]: ""
        }))
    }

    return (
        <div className='reg-container'>
            <div className="reg-left">
                <img src={ bookstore_logo } alt="company-logo" />
            </div>
            <div className="reg-right">
                <div className="reg-right-header">
                    <h2>Create Your Account</h2>
                </div>
                <div className="reg-right-form">
                    <Box
                        component='form'
                        noValidate
                        autoComplete='off'
                        onSubmit={ handleSubmit }
                    >
                        <div className='name' id='single-row'>
                            <CustomTextInput
                                value={ signupForm.firstName }
                                name={ 'firstName' }
                                label='First Name'
                                onChange={ handleChange }
                                required
                                error={ !!errors.firstName }
                                helperText={ errors.firstName }
                            />
                            <CustomTextInput
                                value={ signupForm.lastName }
                                name={ 'lastName' }
                                label='Last Name'
                                onChange={ handleChange }
                                required
                                error={ !!errors.lastName }
                                helperText={ errors.lastName }
                            />
                        </div>
                        <CustomTextInput
                            value={ signupForm.email }
                            name={ 'email' }
                            label='Email'
                            onChange={ handleChange }
                            required
                            type='email'
                            error={ !!errors.email }
                            helperText={ errors.email }
                        />
                        <CustomTextInput
                            value={ signupForm.mobileNumber }
                            name={ 'mobileNumber' }
                            label='Mobile Number'
                            onChange={ handleChange }
                            required
                            error={ !!errors.mobileNumber }
                            helperText={ errors.mobileNumber }
                        />
                        <CustomRadioButton
                            label='Gender'
                            name={ 'gender' }
                            value={ signupForm.gender }
                            onChange={ handleChange }
                            error={ !!errors.gender }
                            helperText={ errors.gender }
                            options={ [
                                { label: "Male", value: "male" },
                                { label: "Female", value: "female" },
                                { label: "Other", value: "other" }
                            ] }
                        />
                        <div className='password-confirm' id='single-row'>
                            <CustomTextInput
                                value={ signupForm.password }
                                name={ 'password' }
                                label='Password'
                                onChange={ handleChange }
                                required
                                error={ !!errors.password }
                                helperText={ errors.password }
                            />
                            <CustomTextInput
                                value={ signupForm.confirmPassword }
                                name={ 'confirmPassword' }
                                label='Confirm Password'
                                onChange={ handleChange }
                                required
                                type={ 'password' }
                                error={ !!errors.confirmPassword }
                                helperText={ errors.confirmPassword }
                            />
                        </div>
                        <div className="signup-btn">
                            <CustomButton
                                fullWidth
                                type="submit"
                                variant="contained"
                            >
                                Sign up
                            </CustomButton>
                        </div>
                    </Box>
                </div>
                <div className="reg-right-footer">
                    Already have an account?
                    <Link to="/login">
                        <span className='signin-link'>&nbsp;Sign in</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Registration;
