import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface ButtonProps {
  primary: boolean;
}

const Button = styled(Link)<ButtonProps>`
  width: 20rem;
  height: 7.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.8rem;
  font: 700 2.0rem 'Archivo';
  text-decoration: none;
  color: var(--color-button-text);
  background: ${(props) => props.primary ? 'var(--color-primary-lighter)' : 'var(--color-secondary)'};
  transition: background-color 0.2s;

  :hover {
    background: ${(props) => props.primary ? 'var(--color-primary-light)' : 'var(--color-secondary-dark)'};
  }

  :first-child {
    margin-right: 1rem;
  }
`;

const Icon = styled.img`
  width: 3.2rem;
  margin-right: 0.8rem;
`;

export {
  Button,
  Icon,
};