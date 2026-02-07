import { useNavigate } from "react-router-dom";

const useGoto = () => {
    const navigate = useNavigate();

    const goToLogin     = () => navigate('/login');
    const gotToSignUp   = () => navigate('/sign-up');
    const goToDashboard = () => navigate('/dashboard');

    const goToLogout    = () => {
        localStorage.removeItem("token");
        navigate('/logout');
    }

    return { 
        goToLogin,
        gotToSignUp,
        goToDashboard,
        goToLogout
    };
}

export default useGoto;