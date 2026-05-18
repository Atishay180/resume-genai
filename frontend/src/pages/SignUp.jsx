import { SignupForm } from '@/components/signup-form'
import React, { useState } from 'react'
import { useAuth } from '../hooks/useAuth'

const SignUp = () => {

    const { register, isRegistering } = useAuth();
    const [formData, setFormData] = useState({ username: '', email: '', password: '', confirmPassword: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            if (formData.password !== formData.confirmPassword) {
                // In a real app, you'd want to show this error in the UI instead of an alert
                alert("Passwords do not match");
                return;
            }
            await register(formData);
            console.log("User registered successfully");

        } catch (error) {
            // In a real app, you'd want to show this error in the UI instead of an alert
            alert(error.response?.data?.message || 'Signup failed');
        }
    };

    return (
        <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
            <div className="w-full max-w-sm">
                <SignupForm
                    handleSubmit={handleSubmit}
                    setFormData={setFormData}
                    formData={formData}
                    isRegistering={isRegistering}
                />
            </div>
        </div>
    )
}

export default SignUp
