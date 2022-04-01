import styled from 'styled-components';

export const InputDiv = styled.div`
  display: flex;
`;

export const Input = styled.input`
  margin-bottom: 1rem;
  padding: 0.5rem 0.8rem;
  color: var(--text-color);
  font-size: 1rem;
  font-weight: 400;
  width: 100%;
  border-radius: 0.4rem;
  box-shadow: 0px 0px 1px 1px var(--input-shadow);

  &:focus {
    box-shadow: 0px 0px 3px 1px var(--box-shadow);
  }
`;

export const InputIcon = styled.i`
  margin: 0 0.3rem;
  color: var(--text-color);
`;
