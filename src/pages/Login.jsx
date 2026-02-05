import Input from "../components/Input";
import Button from "../components/Button";
import ClickableSpan from "../components/ClickableSpan";
import { useNavigate } from "react-router-dom";
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
     * username AND password VALUE
     **/
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });
    
    /**
     * USED TO STORE 
     * showPassword VALUE
     **/
    const [showPassword, setShowPassword] = useState(false);

    /**
     * TOGGLE PASSWORD VISIBILITY
     **/
    const handleShowPassword = () => {
        showPassword ? setShowPassword(false) : setShowPassword(true);
    } 

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

    const handleSignUp = () => {
        navigate('/sign-up');
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
                    <div className="relative">
                        <Input 
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            onChange={(e) => setFormData({... formData, password: e.target.value})}
                            required={true}
                        />
                        <button
                            onClick={handleShowPassword}
                            type="button"
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
                        >
                            {
                                showPassword ?
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                </svg>
                                :
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                                </svg>
                            }
                        </button>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm">
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" className="w-4 h-4 rounded border-gray-300" />
                            <span className="text-gray-600">Remember me</span>
                        </label>
                        <ClickableSpan text="Forgot password?"/>
                    </div>
                </form>
                
                <Button 
                    text="Sign In" 
                    className="w-full mt-2" 
                    type="submit" 
                    form="login-form"
                />
                
                <div className="text-center text-sm text-gray-600 mt-2">
                    Don't have an account? <br />
                    <ClickableSpan text="Sign up" onClick={handleSignUp} />
                </div>
            </div>
        </div>
    )
}

export default Login;