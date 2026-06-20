import { SignupForm } from '@/components/signup-form'
import React, { useState } from 'react'
import { useAuth } from '../hooks/useAuth'
import { useNavigate } from 'react-router';
import { toast } from 'sonner';
import appConfig from '../appConfig';

const SignUp = () => {

    const initialFormData = {
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    };

    const { register, isRegistering } = useAuth();
    const [formData, setFormData] = useState(initialFormData);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            if (formData.password !== formData.confirmPassword) {
                setFormData(prev => ({
                    ...prev,
                    password: '',
                    confirmPassword: '',
                }));

                toast.error("Passwords do not match", { position: "top-center" });
                return;
            }
            await register(formData);
            setFormData(initialFormData);

            navigate('/');
        } catch (error) {
            setFormData(initialFormData);
            toast.error(error.response?.data?.message || "Something went wrong", { position: "top-center" });
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
                    name={appConfig.name}
                    subName={appConfig.subName}
                />
            </div>
        </div>
    )
}

export default SignUp
