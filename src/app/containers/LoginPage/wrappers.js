import styled from 'styled-components/macro';
import { mq } from 'utils/style';

export const LoadingWrapper = styled.div`
  position: absolute;
  z-index: 999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f0f0f0;
  max-height: ${props => (props.loading ? 'none' : '0')};
  opacity: ${props => (props.loading ? '1' : '0')};
  transition: opacity 500ms ease;

  & > * {
    width: 80%;
    max-width: 30rem;
  }
`;

export const PageWrapper = styled.main`
  width: 100%;
  height: 100vh;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const HeaderWrapper = styled.header`
  text-align: center;
  margin-bottom: 1.25rem;

  & > * {
    margin: 0;
  }

  @media ${mq.mobileLg} {
    margin-bottom: 2rem;
  }

  @media ${mq.tablet} {
    margin-bottom: 3rem;
  }
`;

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 30rem;
  width: 100%;
  padding: 2.25rem 1.5rem;
  margin: 0 auto;
  background-color: white;
  border-radius: 0.25rem;
  box-shadow: 5px 5px 15px rgba(11, 11, 11, 0.1);

  @media ${mq.mobileLg} {
    padding: 3rem 2rem;
  }

  @media ${mq.tablet} {
    padding: 3rem;
  }
`;

export const FormFieldWrapper = styled.div`
  width: 100%;
  margin-bottom: 1rem;

  @media ${mq.tablet} {
    margin-bottom: 1.5rem;
  }
`;

export const FormSubmitWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  margin-top: 0.5rem;
`;

export const PrePopWrapper = styled.div`
  margin: 2rem auto 0;
  text-align: center;
`;
