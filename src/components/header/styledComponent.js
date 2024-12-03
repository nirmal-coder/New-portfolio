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
    box-sizing: border-box;
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
    max-width: 100%;
    height:90%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    list-style: none;
    padding-left: 0px;
    flex-shrink: 1;
    flex-wrap: wrap; 
    @media (min-width: 767px) {
        display: none;
    }
`

export const ListMd = styled.div`
    width: 100%;
    max-width: 100%;
    height:90%;
    display: none;
    justify-content: space-around;
    align-items: center;
    font-family: jost;
    flex-shrink: 1;
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

