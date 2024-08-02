import styled from 'styled-components';

export const SearchHistoryItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  padding: 13px 21px;
  border-radius: 16px;
  background-color: ${(props) => props.theme.palette.background.overlayDark};
`;

export const HistoryButton = styled.button`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  border: none;
  outline: none;
  color: ${(props) => props.theme.palette.text.secondary};
  background-color: ${(props) => props.theme.palette.background.paper};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const ActionIcon = styled.div`
  width: 16px;
  height: 16px;
`;
export const StyledTime = styled.time`
  font-size: ${(props) => props.theme.fontSizes.md};
  color: ${(props) => props.theme.palette.text.secondary};
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${(props) => props.theme.fontSizes.xs};
  }
`;

export const StyledContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    align-items: start;
    justify-content: center;
    gap: 4px;
  }
`;
