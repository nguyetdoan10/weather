import { styled } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  height: 60px;
  width: 100%;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    height: 40px;
    gap: 10px;
  }
`;

export const InputWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  padding-left: 40px;
  padding-right: 40px;
  padding-top: 8px;
  gap: 4px;
  background-color: ${(props) => props.theme.palette.background.overlayLight};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    border-radius: 8px;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 4px;
  }
`;

export const SearchInputLabel = styled.label`
  font-size: ${(props) => props.theme.fontSizes.xs};
  color: ${(props) => props.theme.palette.text.tertiary};
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${(props) => props.theme.fontSizes.caption};
  }
`;

export const StyledInput = styled.input`
  background-color: transparent;
  border: none;
  outline: none;
  font-size: ${(props) => props.theme.fontSizes.base};
  min-width: 0;
  color: ${(props) => props.theme.palette.text.primary};
  &::placeholder {
    color: ${(props) => props.theme.palette.text.tertiary};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${(props) => props.theme.fontSizes.sm};
  }
`;

export const StyledButton = styled.button`
  width: 60px;
  border-radius: 20px;
  border-width: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: ${(props) => props.theme.palette.primary.main};
  color: ${(props) => props.theme.palette.text.onPrimary};
  &:disabled {
    pointer-events: none;
    cursor: default;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 40px;
    border-radius: 8px;
  }
`;

export const StyledThemeModeIcon = styled.div`
  width: 34px;
  height: 34px;
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 22px;
    height: 22px;
  }
`;
