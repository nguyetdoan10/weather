import styled from 'styled-components';

export const WeatherInfoWrapper = styled.div`
  padding-left: 10px;
  padding-right: 10px;
`;

export const StyledTempInfo = styled.div`
  font-size: 96px;
  font-weight: bold;
  color: ${(props) => props.theme.palette.text.onOverlayLight};
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 72px;
  }
`;

export const WeatherDetailWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: end;
  padding-top: 8px;
`;

export const CloudImage = styled.img`
  isolation: isolate;
  position: absolute;
  right: 20px;
  top: -95px;
  width: 300px;
  height: 300px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    right: 15px;
    top: -65px;
    width: 157px;
    height: 157px;
  }
`;

export const LeftWrapper = styled.div`
  flex-basis: 25%;
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-basis: 50%;
  }
`;

export const RightWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  color: ${(props) => props.theme.palette.text.secondary};
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column-reverse;
    align-items: end;
    gap: 4px;
  }
`;

export const StyledLocation = styled.div`
  padding-top: 4px;
  color: ${(props) => props.theme.palette.text.secondary};
  font-weight: bold;
`;

export const StyledTime = styled.time`
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    text-align: end;
  }
`;
