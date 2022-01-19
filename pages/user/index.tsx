import { MainLayout, PrivateUser } from '../../src/components';
import { UserScreen } from '../../src/screens';

const User: React.FC = () => (
  <PrivateUser>
    <MainLayout>
      <UserScreen />
    </MainLayout>
  </PrivateUser>
);

export default User;
