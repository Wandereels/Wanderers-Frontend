import React from 'react';

interface PageHeaderProps {
    title: string;
    subtitle?: string;
    children?: React.ReactNode;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle, children }) => (
    <div className="flex justify-between items-start mb-6">
        <div>
            <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
            {subtitle && <p className="text-gray-600 mt-1">{subtitle}</p>}
        </div>
        {children && <div className="flex-shrink-0">{children}</div>}
    </div>
);

export default PageHeader;