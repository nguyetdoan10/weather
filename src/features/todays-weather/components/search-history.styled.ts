import styled from 'styled-components';

export const HistoryWrapper = styled.div`
  border-radius: 24px;
  padding: 23px 20px;
  display: flex;
  flex-direction: column;
  gap: 26px;
  background-color: ${(props) => props.theme.palette.background.overlayLight};
`;
