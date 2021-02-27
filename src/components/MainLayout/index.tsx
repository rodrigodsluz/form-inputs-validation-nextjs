import { Navbar } from '../../components';
import { LayoutContainer } from './styles';

type Props = {
  children: unknown;
};

const MainLayout = ({ children }: Props): JSX.Element => (
  <>
    <Navbar />

    <LayoutContainer>{children}</LayoutContainer>
  </>
);

export default MainLayout;
