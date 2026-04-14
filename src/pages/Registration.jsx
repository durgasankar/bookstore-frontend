import React, { useState } from 'react';
import '../assets/css/registration.css';
import bookstore_logo from '../assets/images/bookstore-logo.png';
import Box from '@mui/material/Box';
import CustomTextInput from '../components/common/CustomTextInput';
import CustomRadioButton from '../components/common/CustomRadioButton';
import CustomButton from '../components/common/CustomButton';

const Registration = () => {
    const [signupForm, setSignupForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
        mobileNumber: '',
        gender: '',
        password: '',
        confirmPassword: ''
    })

    const handleSubmit = event => {
        event.preventDefault();
        console.log('submit', signupForm);
    }
    const handleChange = event => {
        const { name, value } = event.target;
        setSignupForm(prevForm => ({
            ...prevForm,
            [name]: value
        }));
        console.log(name, value);

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
                            />
                            <CustomTextInput
                                value={ signupForm.lastName }
                                name={ 'lastName' }
                                label='Last Name'
                                onChange={ handleChange }
                                required
                            />
                        </div>
                        <CustomTextInput
                            value={ signupForm.email }
                            name={ 'email' }
                            label='Email'
                            onChange={ handleChange }
                            required
                            type='email'
                        />
                        <CustomTextInput
                            value={ signupForm.mobileNumber }
                            name={ 'mobileNumber' }
                            label='Mobile Number'
                            onChange={ handleChange }
                            required
                        />
                        <CustomRadioButton
                            label='Gender'
                            name={ 'gender' }
                            value={ signupForm.gender }
                            onChange={ handleChange }
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
                            />
                            <CustomTextInput
                                value={ signupForm.confirmPassword }
                                name={ 'confirmPassword' }
                                label='Confirm Password'
                                onChange={ handleChange }
                                required
                                type={ 'password' }
                            />
                        </div>

                        <CustomButton
                            fullWidth
                            type="submit"
                            variant="contained"
                        >
                            Submit
                        </CustomButton>

                    </Box>
                </div>
                <div className="reg-right-footer">
                    Already have an account? <a href="#">Sign in</a>
                </div>
            </div>
        </div>
    )
}

export default Registration;
