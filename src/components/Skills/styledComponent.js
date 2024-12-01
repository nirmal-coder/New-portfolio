import styled from "styled-components";

export const MainContainer = styled.div`
    width: 100vw;
    background-color: ${props => props.isDark ? "#000000" : "#FDFCFC"};
    min-height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding-top: 20px;

    h2{
        color: ${props => props.isDark ? "#ffffff" : "#111111"};
        font-size: 1.5rem;
        font-family: inter;
        align-self: flex-start;
        margin-bottom: 20px;
        margin-left: 10%;
    }
`

export const Container = styled.div`
    width: 80vw;
    

    @media (min-width:768px) {
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
`;

export const ChartContainer = styled.div`
  width: 100%;
  height: 40vh;
  @media (min-width: 786px) {
    width: 60%;
  }
`;

export const LegendContainer = styled.div`
    width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  @media (min-width: 786px) {
    width: 30%;
  }
  
`;

export const LegendItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: ${({ isDark }) => (isDark ? "#ffffff" : "#000000")};
`;

export const ColorBox = styled.div`
  width: 16px;
  height: 16px;
  background-color: ${({ color }) => color};
  border-radius: 4px;
`;
