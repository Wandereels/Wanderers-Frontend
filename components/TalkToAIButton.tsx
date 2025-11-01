import React from 'react';

interface TalkToAIButtonProps {
    onClick: () => void;
}

const TalkToAIButton: React.FC<TalkToAIButtonProps> = ({ onClick }) => (
    <button onClick={onClick} className="fixed bottom-8 right-8 bg-yellow-400 text-gray-800 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-yellow-500 transition-colors z-10">
        Talk To AI
    </button>
);

export default TalkToAIButton;