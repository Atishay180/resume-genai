import { LoginForm } from '@/components/login-form'
import React, { useState } from 'react'
import { useAuth } from '../hooks/useAuth'

const Login = () => {

    const { login, isLogging } = useAuth();
    const [formData, setFormData] = useState({ email: '', password: '' });


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await login(formData);
        } catch (error) {
            // In a real app, you'd want to show this error in the UI instead of an alert
            alert(error.response?.data?.message || 'Login failed');
        }
    };

    return (
        <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
            <div className="w-full max-w-sm">
                <LoginForm
                    handleSubmit={handleSubmit}
                    setFormData={setFormData}
                    formData={formData}
                    isLogging={isLogging}
                />
            </div>
        </div>
    )
}

export default Login;
