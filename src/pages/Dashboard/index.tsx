import React from 'react';
import DashboardContent from '../../components/DashBoardContent';

import PageDefault from '../../components/PageDefault/';

const Dashboard: React.FC = () => {
  return (
    <>
      <PageDefault>
        <DashboardContent />
      </PageDefault>
    </>
  );
};

export default Dashboard;
