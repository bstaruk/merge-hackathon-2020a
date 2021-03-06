import styled from 'styled-components/macro';
import { mq } from 'utils/style';

export const PageWrapper = styled.main`
  width: 100%;
  /* height: 100vh; */
  padding: 1rem 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  @media ${mq.mobileLg} {
    padding: 1.5rem 0;
  }

  @media ${mq.tablet} {
    padding: 2.5rem 0;
  }
`;

export const TabsWrapper = styled.div`
  margin: 2rem auto 0;
  flex-grow: 1;
  display: flex;
  width: 100%;
  max-width: 50rem;
`;
