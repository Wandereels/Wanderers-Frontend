import React from 'react';
import PageHeader from '../components/PageHeader';
import Card from '../components/Card';

const NotificationsPage: React.FC = () => {
  return (
    <>
      <PageHeader title="Notifications" />
      <Card>
        <p className="text-gray-600">You have no new notifications.</p>
        {/* Notification items will be mapped here in the future */}
      </Card>
    </>
  );
};

export default NotificationsPage;