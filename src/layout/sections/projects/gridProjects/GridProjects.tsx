import styled from 'styled-components';
import { Project } from './project/Project';

export const GridProjects = () => {
  return (
    <SlytelGridProjects>
      <Project />
      <Project title="Website Re-Design" subTitle="Website Design" />
      <Project />
      <Project />
      <Project />
    </SlytelGridProjects>
  );
};

const SlytelGridProjects = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 320px);
  gap: 30px;

  margin-bottom: 64px;

  div:nth-child(2) {
    grid-column: 2/3;
    grid-row: 1/3;
  }
`;
