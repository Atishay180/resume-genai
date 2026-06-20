import { LoginForm } from '@/components/login-form'
import React, { useState } from 'react'
import { useAuth } from '../hooks/useAuth'
import { useNavigate } from 'react-router';
import { toast } from 'sonner';
import appConfig from '../appConfig';

const Login = () => {

    const initialFormData = {
        email: '',
        password: '',
    };

    const { login, isLogging } = useAuth();
    const [formData, setFormData] = useState(initialFormData);
    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await login(formData);
            setFormData(initialFormData);

            toast.success("Welcome back!", { position: "top-center" });
            navigate('/');
        } catch (error) {
            setFormData(initialFormData);
            toast.error(error.response?.data?.message || "Something went wrong", { position: "top-center" })
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
                    name={appConfig.name}
                    subName={appConfig.subName}
                />
            </div>
        </div>
    )
}

export default Login;
