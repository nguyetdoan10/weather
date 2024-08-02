import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  margin-top: 112px;
`;

export const StyledNotFound = styled.div`
  padding-top: 16px;
  color: ${(props) => props.theme.palette.error.main};
`;
