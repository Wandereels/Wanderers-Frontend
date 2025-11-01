import React from 'react';
import PageHeader from '../components/PageHeader';
import Card from '../components/Card';

const MessagesPage: React.FC = () => {
  return (
    <>
      <PageHeader title="Messages" />
      <Card>
        <p className="text-gray-600">Your message inbox is empty.</p>
        {/* A list of conversations will be rendered here */}
      </Card>
    </>
  );
};

export default MessagesPage;