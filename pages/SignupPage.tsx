import React from 'react';
import AuthLayout from '../components/AuthLayout';
import SocialLoginButtons from '../components/SocialLoginButtons';

interface SignupPageProps {
    navigate: (page: string) => void;
}

const SignupPage: React.FC<SignupPageProps> = ({ navigate }) => {
    return (
        <AuthLayout>
            <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-800">Create an Account</h2>
                <p className="mt-2 text-gray-600">Start your adventure with us today.</p>
            </div>

            <SocialLoginButtons actionText="up" />
            
            <div className="text-center">
                 <p className="text-sm text-gray-500">
                    Already have an account?{' '}
                    <button onClick={() => navigate('login')} className="font-medium text-blue-600 hover:underline">
                        Log in
                    </button>
                </p>
            </div>
        </AuthLayout>
    );
};

export default SignupPage;