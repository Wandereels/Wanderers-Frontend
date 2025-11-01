import React from 'react';
import AuthLayout from '../components/AuthLayout';
import SocialLoginButtons from '../components/SocialLoginButtons';

interface LoginPageProps {
    navigate: (page: string) => void;
    setIsAuthenticated: (isAuth: boolean) => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ navigate, setIsAuthenticated }) => {

    const handleLogin = () => {
        setIsAuthenticated(true);
        navigate('home');
    }

    return (
        <AuthLayout>
            <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-800">Welcome Back!</h2>
                <p className="mt-2 text-gray-600">Log in to continue your journey.</p>
            </div>

            <SocialLoginButtons actionText="in" />
            
            <div className="text-center">
                 <p className="text-sm text-gray-500">
                    Don't have an account?{' '}
                    <button onClick={() => navigate('signup')} className="font-medium text-blue-600 hover:underline">
                        Sign up
                    </button>
                </p>
            </div>
            
            {/* Temporary button for simulation */}
            <div className="pt-4 border-t border-gray-200">
                <button 
                    onClick={handleLogin}
                    className="w-full px-4 py-2 text-sm font-medium text-white bg-yellow-500 rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
                >
                    Simulate Login
                </button>
                <p className="mt-2 text-xs text-center text-gray-500">(For development only)</p>
            </div>
        </AuthLayout>
    );
};

export default LoginPage;