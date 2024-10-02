import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const navigate = useNavigate();

    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email format').required('Email is required'),
        password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
        username: Yup.string().required('Username is required'),
    });

    const handleSubmit = (values) => {
        console.log('Form Values', values);
        navigate('/');
    };

    return (
        <div>
            <h2>Sign Up</h2>
            <Formik
                initialValues={{ email: '', password: '', username: '' }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                <Form>
                    <div>
                        <label>Username: </label>
                        <Field type="text" name="username" />
                        <ErrorMessage name="username" component="div" style={{ color: 'red' }} />
                    </div>
                    <div>
                        <label>Email: </label>
                        <Field type="email" name="email" />
                        <ErrorMessage name="email" component="div" style={{ color: 'red' }} />
                    </div>
                    <div>
                        <label>Password: </label>
                        <Field type="password" name="password" />
                        <ErrorMessage name="password" component="div" style={{ color: 'red' }} />
                    </div>
                    <button type="submit">Sign Up</button>
                </Form>
            </Formik>
            <Link to="/">
                <button>Back to Home</button>
            </Link>
        </div>
    );
};

export default SignUp;
