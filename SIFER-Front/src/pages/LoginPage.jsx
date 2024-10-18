import React from 'react';
import NavBar from '../components/navbar';
import LoginForm from '../components/LoginForm';
import '../assets/css/NavBar.css'

const LoginPage = () => {
    return (
        <div>
            <NavBar />
            <LoginForm />
        </div>
    );
};

export default LoginPage;
