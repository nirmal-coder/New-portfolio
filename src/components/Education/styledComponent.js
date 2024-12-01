import styled from "styled-components";

export const MainContainer = styled.div`
    width: 100%;
    background-color: ${props => props.isDark ? "#000000" : "#F5F5F5"};
    min-height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 20px;
`

export const Container = styled.div`
    width: 80%;
    h2{
        color: ${props => props.isDark ? "#ffffff" : "#111111"};
        font-size: 1.5rem;
        font-family: inter;
        align-self: flex-start;
        margin-bottom: 20px;
    }
`;

// export const TabContainer = styled.div`
//   width: 100%;
//   background-color: transparent;
//   display: flex;
//   justify-content:space-around;
//   align-items: center;

//   @media (min-width:768px){
//     flex-direction: column;
//   }
// `;

export const Tabs = styled.div`
  background-color: ${props => {
    if (props.isDark){
        if (props.isSelected){
            return "#1F1E1E"
        }
       return "transparent"
    }
    else{
        if (props.isSelected){
            return "#ffffff"
        }
        return "transparent"
    }
  }};;
  color: ${props => props.isDark ? "#ffffff" : "#111111"};
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 25px;
  border: 0px;
  font-family: Georgia;
  h3{
    font-size: 1rem;
    font-weight: 600;
  }

  .header{
    display: flex;
    align-items: center;
    margin-bottom: 15px;
  }
  .header h3{
    margin-left: 8px;
    
  }
`;


export const Description = styled.div`
    width: 90%;
    color: ${props => props.isDark ? "#ffffff" : "#111111"};
  div h5{
    font-weight: 600;
    margin-bottom: 10px;
  }
  div p{
    font-weight: 100;
    font-size: 0.8rem;
    margin-bottom: 10px;
    font-family: Roboto;
  }
  .des{
    font-size: 0.8rem;
    font-weight: 200;
    font-family: Roboto;

  }

  @media (min-width: 768px) {
    div{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  }
`;