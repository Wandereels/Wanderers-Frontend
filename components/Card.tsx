import React from 'react';

interface CardProps {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
    as?: 'div' | 'button';
}

const Card: React.FC<CardProps> = ({ children, className = '', onClick, as = 'div' }) => {
    const baseClasses = "bg-white p-6 rounded-lg border border-gray-200";
    const interactiveClasses = onClick ? "hover:shadow-md transition-shadow cursor-pointer" : "";
    const combinedClasses = `${baseClasses} ${interactiveClasses} ${className}`;

    if (as === 'button' && onClick) {
        return (
            <button onClick={onClick} className={`${combinedClasses} text-left`}>
                {children}
            </button>
        );
    }

    return (
        <div className={combinedClasses}>
            {children}
        </div>
    );
};

export default Card;