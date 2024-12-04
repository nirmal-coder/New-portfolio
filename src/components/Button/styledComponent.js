import styled from "styled-components";

export const ButtonWrapper1 = styled.div`
  height: 45px;
  width: 45px;
  padding: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;
  transition: box-shadow 0.3s ease-in-out;
  outline: none;
  background: linear-gradient(
    to right,
    #9358f7 0%,
    #9259f7 7%,
    #8e5df6 13%,
    #8862f5 20%,
    #806bf4 27%,
    #7575f2 33%,
    #6882f0 40%,
    #5990ee 47%,
    #4a9feb 53%,
    #3bade9 60%,
    #2ebae7 67%,
    #23c4e5 73%,
    #1bcde4 80%,
    #15d2e3 87%,
    #11d6e2 93%,
    #10d7e2 100%
  );

  &:hover{
    box-shadow: 0 0 20px 5px #9358f7, 
              0 0 25px 10px #9259f7, 
              0 0 30px 15px #10d7e2;
    transform: scale(1.1);
  }

  &:focus{
    scale: 0.8;

  }
`;

export const ButtonWrapper2 = styled.div`
  height: 45px;
  width: 45px;
  padding: 2px;
  display: inline-block;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: box-shadow 0.3s ease-in-out;
  outline: none;
  background: linear-gradient(
    to left,
    #9358f7 0%,
    #9259f7 7%,
    #8e5df6 13%,
    #8862f5 20%,
    #806bf4 27%,
    #7575f2 33%,
    #6882f0 40%,
    #5990ee 47%,
    #4a9feb 53%,
    #3bade9 60%,
    #2ebae7 67%,
    #23c4e5 73%,
    #1bcde4 80%,
    #15d2e3 87%,
    #11d6e2 93%,
    #10d7e2 100%
  );

  &:hover{
    box-shadow: 0 0 20px 5px #9358f7, 
              0 0 30px 10px #9259f7, 
              0 0 40px 15px #10d7e2;
    scale: 1.1; 
  }

  &:focus{
    scale: 0.8;
    
  }
`;

export const ButtonWrapper3 = styled.div`
  height: 45px;
  width: 45px;
  padding: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;
  transition: box-shadow 0.3s ease-in-out;
  outline: none;
  transition: box-shadow 0.3s ease-in-out;
  outline: none;
  background: linear-gradient(
    to bottom,
    #9358f7 0%,
    #9259f7 7%,
    #8e5df6 13%,
    #8862f5 20%,
    #806bf4 27%,
    #7575f2 33%,
    #6882f0 40%,
    #5990ee 47%,
    #4a9feb 53%,
    #3bade9 60%,
    #2ebae7 67%,
    #23c4e5 73%,
    #1bcde4 80%,
    #15d2e3 87%,
    #11d6e2 93%,
    #10d7e2 100%
  );

  &:hover{
    box-shadow: 0 0 20px 5px #9358f7, 
              0 0 25px 10px #9259f7, 
              0 0 30px 15px #10d7e2;
    scale: 1.1; 
  }

  &:focus{
    scale: 0.8;

  }
`;

export const ButtonWrapper4 = styled.div`
  height: 45px;
  width: 45px;
  padding: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1px;
  border-radius: 50%;
  cursor: pointer;
  transition: box-shadow 0.3s ease-in-out;
  outline: none;
  background: linear-gradient(
    to top,
    #9358f7 0%,
    #9259f7 7%,
    #8e5df6 13%,
    #8862f5 20%,
    #806bf4 27%,
    #7575f2 33%,
    #6882f0 40%,
    #5990ee 47%,
    #4a9feb 53%,
    #3bade9 60%,
    #2ebae7 67%,
    #23c4e5 73%,
    #1bcde4 80%,
    #15d2e3 87%,
    #11d6e2 93%,
    #10d7e2 100%
  );

  &:hover{
    box-shadow: 0 0 20px 5px #9358f7, 
              0 0 25px 10px #9259f7, 
              0 0 30px 15px #10d7e2;
    scale: 1.1; 
  }

  &:focus{
    scale: 0.8;

  }
`;
export const HireMeButton = styled.button`
  height: 43px;
  width: 43px;
  font-size: 1rem;
  background-color: ${props => props.isDark ?  "#111111" : "#ffffff"};
  color: ${props => props.isDark ? "#ffffff" : "#111111"};
  border: 2px solid transparent;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center; 
  justify-content: center; 
`;


export const ButtonWrapper5 = styled.div`
  height: 45px;
  width: 150px;
  padding: 2px;
  margin-right: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1px;
  border-radius: 10px;
  cursor: pointer;
  transition: box-shadow 0.3s ease-in-out;
  outline: none;
  background: linear-gradient(
    to top,
    #9358f7 0%,
    #9259f7 7%,
    #8e5df6 13%,
    #8862f5 20%,
    #806bf4 27%,
    #7575f2 33%,
    #6882f0 40%,
    #5990ee 47%,
    #4a9feb 53%,
    #3bade9 60%,
    #2ebae7 67%,
    #23c4e5 73%,
    #1bcde4 80%,
    #15d2e3 87%,
    #11d6e2 93%,
    #10d7e2 100%
  );
  &:hover{
    box-shadow: 0 0 1px 2px #9358f7, 
              0 0 25px 6px #9259f7, 
              0 0 30px 8px #10d7e2;
    scale: 1.1; 
  }

  &:focus{
    scale: 0.8;

  }
`;

export const SquareBtn1 = styled.button`
  font-size: 1rem;
  height: 43px;
  width: 147px;
  font-weight: 700;
  padding: 5px 15px;
  border-radius: 10px;
  background-color: ${props => props.isDark ?  "#111111" : "#ffffff"};
  color: ${props => props.isDark ? "#ffffff" : "#111111"};
  border: 2px solid transparent;
  cursor: pointer;
  display: flex;
  align-items: center; 
  justify-content: center; 
  cursor: pointer;
  transition: box-shadow 0.3s ease-in-out;
  outline: none;
  
`;

export const NavWrapper = styled.div`
  width: 50%;
  padding: 2px;
  margin-right: 16px;
  display: ${props => props.isSelected  ? "flex" : "none"};;
  justify-content: center;
  align-items: center;
  padding: 1px;
  border-radius: 10px;
  position: fixed;
  top: 70px;
  right: 0;
  transition: box-shadow 0.3s ease-in-out;
  outline: none;
  z-index: 10000;
  background: linear-gradient(
    to top,
    #9358f7 0%,
    #9259f7 7%,
    #8e5df6 13%,
    #8862f5 20%,
    #806bf4 27%,
    #7575f2 33%,
    #6882f0 40%,
    #5990ee 47%,
    #4a9feb 53%,
    #3bade9 60%,
    #2ebae7 67%,
    #23c4e5 73%,
    #1bcde4 80%,
    #15d2e3 87%,
    #11d6e2 93%,
    #10d7e2 100%
  );
`;


export const NavItem = styled.ul`

width: calc(100% - 2px);
  font-size: 1rem;
  font-weight: 700;
  padding: 5px 15px;
  border-radius: 10px;
  background-color: ${props => props.isDark ?  "#111111" : "#ffffff"};
  color: ${props => props.isDark ? "#ffffff" : "#111111"};
  border: 2px solid transparent;
  display: flex;
  flex-direction: column;
  align-items: center; 
  justify-content: center; 
  list-style: none;
  transition: box-shadow 0.3s ease-in-out;
  padding-left: 0px;

  li{
    margin: 10px;
  }

  li a{
    color: ${props => props.isDark ? "#ffffff" : "#111111"};
    text-decoration: none;
  }


  
`;