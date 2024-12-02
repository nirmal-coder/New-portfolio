import styled from 'styled-components';

export const Navbar = styled.nav`
    width:100%;
    height:60px;
    background-color:${props => props.isDark ? "#111111" : "#ffffff"} ;
    display:flex;
    justify-content:center;
    align-items:center;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 100;
    overflow-x: hidden;
    h1{
        color: ${props => props.isDark ? "#ffffff" : "#111111" } ;
        font-family: playfair display;
    }

    a{
        color: inherit !important;
        text-decoration: none;
    }
    
`

export const ListSm = styled.ul`
    width: 100%;
    height:90%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    list-style: none;
    padding-left: 0px;

    @media (min-width: 767px) {
        display: none;
    }
`

export const ListMd = styled.div`
    width: 100%;
    height:90%;
    display: none;
    justify-content: space-around;
    align-items: center;
    font-family: jost;
    @media (min-width: 768px) {
        display: flex;
    }

    ul{
        width: 50%;
        height: 90%;
        display: flex;
        align-items: center;
        justify-content: space-around;
        list-style: none;
        padding-left: 0px;
        color: ${props => props.isDark ? "#ffffff" : "#111111" } ;
    }

    
`

export const ThemeButton = styled.button`
  padding: 0px;
  background-color: transparent;
  border: 0px;
  color: ${props => props.isDark ? "#ffffff" : "#111111" } ;
  font-size: 1.5rem;
  cursor: pointer;
`;

export const NavButton = styled(ThemeButton)`
    cursor: pointer;
`;

export const anchor = styled.a`
  color: ${props => props.isDark ? "#ffffff" : "#111111" } ;
`;

export const ShowNavItems = styled.div`
  background-color: #111111;
`;

export const SmallNavItems = styled.ul`
    width: 50%;
    background-color:${props => props.isDark ? "#111111" : "#ffffff"} ;
  list-style: none;
  padding-left: 0;
  display: ${props => props.isSelected ? "flex" : "none"};
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  top: 60px;
  
  left: 50vw;
  right: 10vw;
  z-index: 102;
  transition-duration: 1s;
  border: 1px solid yellow;
  margin-right: 20px;


  color: ${props => props.isDark ? "#ffffff" : "#111111" } ;

  @media (min-width:768px){
    display: none;
  }

  li{
    background-color:transparent ;
    padding: 5px 10px;
    color: ${props => props.isDark ? "#ffffff" : "#111111" } ;
    
    flex-shrink: 1;
    
  }
  li a{
    color: ${props => props.isDark ? "#ffffff" : "#111111" } ;
    text-decoration: none;
    font-weight: 700;
    font-family: jost;
  }
`;