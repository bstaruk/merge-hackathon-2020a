import styled from 'styled-components/macro';

export const PageWrapper = styled.main`
  width: 100%;
  height: 100vh;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 50rem;
  width: 100%;
  padding: 1rem;
  margin: 0 auto;
`;

export const TitleWrapper = styled.div`
  margin-right: 1rem;
`;

export const ButtonWrapper = styled.div`
  margin: 2rem auto 0;
  text-align: center;
`;

export const TabsWrapper = styled.div`
  margin: 2rem auto 0;
  flex-grow: 1;
  display: flex;
  width: 100%;
  max-width: 50rem;
`;
