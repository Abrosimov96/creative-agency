import styled from 'styled-components';
import { Container } from '../../../components/Container.styled';
import { FlexWrapper } from '../../../components/FlexWrapper.styled';
import { Service } from './service/Service';

const serviceItems = [
  {
    icon: 'target',
    title: 'Website Design',
  },
  {
    icon: 'monitor',
    title: 'Product Design',
  },
  {
    icon: 'diamond',
    title: 'Business Strategy',
  },
  {
    icon: 'presentation',
    title: 'UI/UX Design',
  },
  {
    icon: 'briefcase',
    title: 'Digital Marketing',
  },
  {
    icon: 'optimization',
    title: 'Brand Strategy',
  },
  {
    icon: 'pencil',
    title: 'Content Writing',
  },
  {
    icon: 'fingerScanner',
    title: 'Cyber Security',
  },
];

export const Services = () => {
  return (
    <StyledServices>
      <Container>
        <FlexWrapper wrap="wrap" justify="space-between" gap="30px">
          {serviceItems.map((item) => (
            <Service
              key={item.title}
              icon={item.icon}
              title={item.title}
            />
          ))}
        </FlexWrapper>
      </Container>
    </StyledServices>
  );
};

const StyledServices = styled.section`
  padding: 144px 0;
`;
