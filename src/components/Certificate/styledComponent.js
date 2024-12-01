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

    
`

export const Container = styled.div`
    width: 80vw;
    h2{
        color: ${props => props.isDark ? "#ffffff" : "#111111"};
        font-size: 1.5rem;
        font-family: inter;
        align-self: flex-start;
        margin-bottom: 20px;
    }

    .react-chrono-controls {
  display: none !important;
}
`;

export const CardContainer = styled.div`
  width: 100%;
  height: 500px;
  padding: 15px;

  img{
    width: 100%;
  }
  
`;
