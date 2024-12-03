import styled from "styled-components";

export const HeroContainer = styled.div`
    max-width:100vw !important;
    min-height: 60vh;
    background-color: ${props => props.isDark ? "#111111" : "#ffffff"};;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 90px;
    @media (min-width: 768px){
      min-height: 90vh;
    }
`;

export const Container = styled.div`
  width: 80%;
  p{
    font-size: 1rem;
    color: ${props => props.isDark ? "#F0F0F0" : "#1A1A1A"};
    font-size: 0.8rem;
    margin-bottom: 5px;
    font-weight: 100;
    font-family: inter;
    word-spacing: 0.1rem;
  }
  h1{
    background: linear-gradient(to right, #9845E8 0%, #33D2FF 55%, #DD5789 100%);
    background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 2rem;
    font-family: GT Walsheim Pro;
    
    margin-bottom:8px;
  }

  .des-lg{
    display: none;
  }

  @media (min-width: 768px){
    h1{
      font-size: 4.5rem;
      
    }
    p{
      font-size: 1.5;
    }
    .des-sm{
      display: none;
    }
    .des-lg{
      display: initial;
    }
  }

  @media (min-width: 1024px){
    h1{
      font-size: 5.5rem;
      
    }
    
  }
`;



export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 16px;

  @media (min-width:768px) {
    width: 50%;
    margin-top: 32px;
  }
  a{
    color: inherit;
  }
`;