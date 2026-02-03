import Input from "../components/Input";
import Button from "../components/Button";
import { Link, useNavigate } from "react-router-dom";
import api from "../axios/api"
import { useState } from "react";
import userModalStore from '../hooks/useModalStore';

const Login = () => {
    /**
     * USE TO NAVIGATE TO 
     * DIFFERERNT ROUTE
     **/ 
    const navigate = useNavigate();

    /**
     * GET THE onOPen PROPERTY
     * INSIDE userModalStore()
     **/ 
    const { onOpen } = userModalStore();

    /**
     * USED TO STORE 
     * USERNAME AND PASSWORD 
     **/
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });

    /**
     * HANDLE THE LOGIN SUBMITION
     **/ 
    const handleSubmit =  async (e) => {
        e.preventDefault();

        try {
            const response = await api.post("/v1/users/login", {
                username: formData.username,
                password: formData.password,
            });

            const {message, success} = response.data;
            
            if (success) {
                localStorage.setItem("token", message);
                navigate('/dashboard');
            }

        } catch (error) {
            const errorData = error.response?.data || "Server Connection Failed";

            onOpen("error", errorData);
        }
    }

    return (
        <div className="flex items-center justify-center min-h-screen p-4 bg-linear-to-br from-gray-50 to-gray-100">
            <div className="grid grid-cols-1 gap-y-6 shadow-2xl bg-white rounded-2xl p-8 w-full max-w-md animate-fade-in">
                <div className="flex flex-col items-center gap-4">
                    <img 
                        src="/images/ZombieingDoodle.svg" 
                        alt="AmIhired Logo" 
                        className="w-32 h-32 animate-float"
                    />
                    <div className="text-center">
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">Hi, Welcome</h1>
                        <p className="text-gray-600 text-sm">Sign in to your account</p>
                    </div>
                </div>
                
                <form onSubmit={handleSubmit} id="login-form" className="space-y-4 mt-2">
                    <Input 
                        type="text" 
                        placeholder="Username"
                        onChange={(e) => setFormData({... formData, username: e.target.value})}
                        required={true}
                    />
                    <Input 
                        type="password" 
                        placeholder="Password"
                        onChange={(e) => setFormData({... formData, password: e.target.value})}
                        required={true}
                    />
                    
                    <div className="flex items-center justify-between text-sm">
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" className="w-4 h-4 rounded border-gray-300" />
                            <span className="text-gray-600">Remember me</span>
                        </label>
                        <Link to="#" className="text-yellow-500 hover:text-yellow-600 font-medium transition-colors">
                            Forgot password?
                        </Link>
                    </div>
                </form>
                
                <Button 
                    text="Sign In" 
                    className="w-full mt-2" 
                    type="submit" 
                    form="login-form"
                />
                
                <div className="text-center text-sm text-gray-600 mt-2">
                    Don't have an account?
                    <Link to="#" className="text-yellow-500 hover:text-yellow-600 font-semibold transition-colors">
                        Sign up
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Login;