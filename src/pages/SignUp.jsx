import Button from "../components/Button";
import Input from "../components/Input";
import ClickableSpan from "../components/ClickableSpan";
import { useState } from "react";
import EyeIcon from "../components/icons/EyeIcon";
import EyeSlashIcon from "../components/icons/EyeSlashIcon";
import api from '../axios/api'
import useModalStore from '../hooks/useModalStore'
import useGoto from "../hooks/useGoto";

const SignUp = () => {
    // NAVIGATION HOOK
    const { goToLogin } = useGoto();

    // MODAL HOOK
    const { onOpen } = useModalStore();

    const [showPassword, setShowPassword] = useState({
        password: false,
        confirmPassword: false
    });

    const [user, setUser] = useState({
        email: null,
        username: null,
        password: null,
        confirm_password: null
    });


    // SWITCH/FLIP THE VALUE OF PASSWORD TYPE (password, confirmPassword) 
    const handleShowPassword = (fieldName) => {
        setShowPassword((prev) => ({
            ...prev,
            [fieldName]: !prev[fieldName]
        }));
    }

    // HANDLE USER REGISTRATION
    const handleSignUp = async (e) => {
        e.preventDefault();

        try {
            const response = await api.post("/v1/users/register", {...user});
            
            if (response.data?.success || false) {
                const message = response.data?.message || "Server Connection Failed";

                onOpen("success", message);
            }
            
        } catch (error) {
            const errorMessage = error.response?.data || "Server Connection Failed";

            onOpen("error", errorMessage);
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
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">Let's Get Started</h1>
                    </div>
                </div>
                
                <form onSubmit={handleSignUp} id="signup-id" className="space-y-4 mt-2">
                    <Input 
                        type="email" 
                        placeholder="Email"
                        onChange={(e) => setUser({
                            ...user,
                            email: e.target.value
                        })}
                        required={true}
                    />
                    <Input 
                        type="text" 
                        placeholder="Username"
                        onChange={(e) => setUser({
                            ...user,
                            username: e.target.value
                        })}
                        required={true}
                    />
                    <div className="relative">
                        <Input 
                            type={showPassword.password ? "text" : "password"}
                            placeholder="Password"
                            onChange={(e) => setUser({
                                ...user,
                                password: e.target.value
                            })}
                            required={true}
                        />
                        <button
                            onClick={() => handleShowPassword("password")}
                            aria-label={showPassword.password ? "Hide password" : "Show password"}
                            type="button"
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
                        >
                            {
                                showPassword.password ?
                                <EyeIcon />
                                :
                                <EyeSlashIcon />
                            }
                        </button>
                    </div>
                    <div className="relative">
                        <Input 
                            type={showPassword.confirmPassword ? "text" : "password"}
                            placeholder="Confirm Password"
                            onChange={(e) => setUser({
                                ...user,
                                confirm_password: e.target.value
                            })}
                            required={true}
                        />
                        <button
                            onClick={() => handleShowPassword("confirmPassword")}
                            aria-label={showPassword.confirmPassword ? "Hide Confirm password" : "Show Confirm password"}
                            type="button"
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
                        >
                            {
                                showPassword.confirmPassword ?
                                <EyeIcon />
                                :
                                <EyeSlashIcon />
                            }
                        </button>
                    </div>
                </form>
                
                <Button 
                    text="Sign Up" 
                    className="w-full mt-2" 
                    type="submit" 
                    form="signup-id"
                />
                
                <div className="text-center text-sm text-gray-600 mt-2">
                    Already have an account? <br />
                    <ClickableSpan text="Login" onClick={goToLogin} />
                </div>
            </div>
        </div>
    )
}

export default SignUp;