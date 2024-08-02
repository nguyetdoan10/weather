import styled from 'styled-components';

export const Card = styled.div`
  margin-top: 112px;

  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 26px;
  position: relative;

  background-color: ${(props) => props.theme.palette.background.overlayLight};
  border: ${(props) => props.theme.palette.border};
  border-width: 1px;
  border-style: solid;
  border-radius: 40px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    border-radius: 20px;
    padding: 20px;
    gap: 20px;
  }
`;
