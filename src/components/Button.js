import styled from 'styled-components';

export const Button = styled.button`
  padding: 0.4rem 0.6rem;
  color: white;
  font-family: 'Poppins', sans-serif;
  border-radius: 0.4rem;
  transition: all 0.3s;
  background-color: var(--primary-green);

  &:hover {
    cursor: pointer;
  }

  &:focus {
    box-shadow: 0px 0px 3px 1px var(--box-shadow);
  }
`;

export const CancelButton = styled.button`
  margin-right: 1rem;
  padding: 0.4rem 0.6rem;
  color: var(--primary-green);
  font-family: 'Poppins', sans-serif;
  border: 1px solid var(--input-shadow);
  border-radius: 0.4rem;
  transition: all 0.3s;
  background-color: white;

  &:hover {
    cursor: pointer;
  }

  &:focus {
    box-shadow: 0px 0px 3px 1px var(--box-shadow);
  }
`;
