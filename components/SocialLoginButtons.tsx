import React from 'react';
import { GoogleIcon, PhoneIcon } from './icons/AppIcons';

interface SocialLoginButtonsProps {
    actionText: 'in' | 'up';
}

const SocialLoginButtons: React.FC<SocialLoginButtonsProps> = ({ actionText }) => (
    <div className="space-y-4">
        <button className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg shadow-sm bg-white text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            <GoogleIcon className="w-5 h-5 mr-2" />
            <span>Sign {actionText} with Google</span>
        </button>
        <button className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg shadow-sm bg-white text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            <PhoneIcon className="w-5 h-5 mr-2" />
            <span>Sign {actionText} with Phone Number</span>
        </button>
    </div>
);

export default SocialLoginButtons;