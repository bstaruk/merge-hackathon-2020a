import styled from 'styled-components/macro';

export const PageWrapper = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const HeaderWrapper = styled.header`
  text-align: center;
  margin-bottom: 3rem;

  & > * {
    margin: 0;
  }
`;

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 30rem;
  width: 100%;
  padding: 3rem;
  margin: 0 auto;
  background-color: white;
  border-radius: 0.25rem;
  box-shadow: 5px 5px 15px rgba(11, 11, 11, 0.1);
`;

export const FormFieldWrapper = styled.div`
  width: 100%;
  margin-bottom: 1.5rem;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const FormSubmitWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
`;
