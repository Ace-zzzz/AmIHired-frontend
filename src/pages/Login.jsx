import Input from "../components/Input";
import Button from "../components/Button";

const Login = () => {
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
                
                <div className="space-y-4 mt-2">
                    <Input type="text" placeholder="Username" />
                    <Input type="password" placeholder="Password" />
                    
                    <div className="flex items-center justify-between text-sm">
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" className="w-4 h-4 rounded border-gray-300" />
                            <span className="text-gray-600">Remember me</span>
                        </label>
                        <a href="#" className="text-yellow-500 hover:text-yellow-600 font-medium transition-colors">
                            Forgot password?
                        </a>
                    </div>
                </div>
                
                <Button text="Sign In" className="w-full mt-2" />
                
                <div className="text-center text-sm text-gray-600 mt-2">
                    Don't have an account?{" "}
                    <a href="#" className="text-yellow-500 hover:text-yellow-600 font-semibold transition-colors">
                        Sign up
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Login;