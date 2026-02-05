import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/Input";

const SignUp = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/login');
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
                
                <form className="space-y-4 mt-2">
                    <Input 
                        type="email" 
                        placeholder="Email"
                        required={true}
                    />
                    <Input 
                        type="text" 
                        placeholder="Username"
                        required={true}
                    />
                    <Input 
                        type="password" 
                        placeholder="Password"
                        required={true}
                    />
                    <Input 
                        type="password" 
                        placeholder="Confirm Password"
                        required={true}
                    />
                </form>
                
                <Button 
                    text="Sign In" 
                    className="w-full mt-2" 
                    type="submit" 
                    form="login-form"
                />
                
                <div className="text-center text-sm text-gray-600 mt-2">
                    Aleady have an account? <br />
                    <span onClick={handleLogin} className="cursor-pointer text-yellow-500 hover:text-yellow-600 font-semibold transition-colors">
                        Login
                    </span>
                </div>
            </div>
        </div>
    )
}

export default SignUp;