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
export const CustomSlider = styled.div`
  .slick-prev,
.slick-next {
  z-index: 2; /* Ensure arrows are above slider content */
  background: transparent !important; /* Override default background */
  border: none;
}

.slick-prev::before,
.slick-next::before {
  content: ''; /* Remove default arrow content */
}

.slick-prev span,
.slick-next span {
  font-size: 18px; /* Adjust size of custom arrow icon */
  display: flex;
  align-items: center;
  justify-content: center;
}
.slideItem{
    padding: 0 15px;
    cursor: pointer;
}

.title{
    text-align: center;
    font-weight: 500;
    font-size: 1.2rem;
    color: ${props => props.isDark ? "#ffffff" : "#111111"};
    font-family: Playfair Display;
}
`

export const PopupContainer = styled.div`
  width: 100%;
  min-height: 40vh;
`;

export const DetailsContainer = styled.div`
  height: 100%;
  width: 90%;
  overflow-y: scroll;
  background-color: ${props => props.isDark ? "#111111" : "#ffffff"};
  color: ${props => props.isDark ? "#ffffff" : "#111111"};
  z-index: 2;
  border-radius: 10px;
  padding: 10px;
  img {
  width: 100%;
  z-index: 2;
  }

  h2{
    font-family: Playfair Display;
    font-size:1rem;
    margin: 6px 2px;
  }

  p{
    color: #989798;
    margin-bottom: 10px;
  }

  .btn-con{
    display: flex;
    align-items: center;
    padding: 10px;
  }
  a{
      text-decoration: none;
      color: inherit;
    }
  


  @media (min-width: 768px){
    img{
      width: 50%;
    }
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;

  .project-chart{
    display: none;
    width: 40%;
  }
  @media (min-width: 768px) {
    display: flex;
  }
`;