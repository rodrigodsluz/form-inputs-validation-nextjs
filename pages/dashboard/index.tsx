import { MainLayout } from '../../src/components';
import { DashboardScreen } from '../../src/screens';

const Dashboard: React.FC = () => {
  console.log('eae');

  return (
    <MainLayout>
      <DashboardScreen/>
    </MainLayout>
  );
};

export default Dashboard;
