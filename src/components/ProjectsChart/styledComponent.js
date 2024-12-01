import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
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

