import styled from "styled-components";


export const FooterContainer = styled.footer`
    width:100%;
    padding: 16px;
    background-color: ${props => props.isDark ? "#000000" : "#FDFCFC"};
    display: flex;
    flex-direction: column;
    align-items: center;
    p{
        color:${props => props.isDark ? "#ffffff" : "#111111" }; 
        font-size: 0.8rem;
    }
`;
export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 16px;
  margin-bottom: 16px;

  @media (min-width:768px) {
    width: 50%;
  }
  a{
    color: inherit;
    
  }
`;