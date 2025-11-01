import React from 'react';

interface AuthLayoutProps {
    children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => (
    <div className="flex items-center justify-center h-full">
        <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md border border-gray-200">
            {children}
        </div>
    </div>
);

export default AuthLayout;