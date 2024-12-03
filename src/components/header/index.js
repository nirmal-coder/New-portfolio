import React, { useContext , useState} from 'react'
import { MdLightMode } from "react-icons/md";
import { IoMoonSharp  } from "react-icons/io5";
import {  BiChevronsDown, BiChevronsUp } from "react-icons/bi";
import {ListMd, ListSm,Navbar, NavButton, ThemeButton } from "./styledComponent"

import ThemeContext from '../../ThemeContext';
import { NavItemContainer } from '../Button';

const Header = () => {
    const { isDark, changeTheme } = useContext(ThemeContext);
    const [nav , toggleNav ] = useState(false);

    const change = ()=>{
        console.log("clicked")
        changeTheme()
    }

    const onClickNav = ()=>{
        toggleNav((prev) => !prev)
    }
  return (
    
    <>
    <Navbar isDark={isDark} data-aos="fade-down"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="false"
    data-aos-once="true"
>
        
        <ListSm>
        <h1><a href="#home">NK</a>
        </h1>
        <li>
                <ThemeButton isDark={isDark} onClick={change}>{isDark? <MdLightMode /> : <IoMoonSharp />}</ThemeButton>
            </li>
            <li>
                <>
                    <NavButton isDark={isDark} onClick={onClickNav}> {nav ?  <BiChevronsDown /> : <BiChevronsUp /> } </NavButton>
                </>
            </li>
        </ListSm>
        <ListMd isDark={isDark}>
            <h1><a href="#home">NK</a></h1>
            <ul>
            <li><a href="#Skills" >Skills</a></li>
            <li><a href="#Projects">Projects</a></li>
            <li><a href="#Certificate">Certificate</a></li>
            
            <li>
                <ThemeButton isDark={isDark} onClick={change}>{isDark? <MdLightMode /> : <IoMoonSharp />}</ThemeButton>
            </li>
            </ul>
        </ListMd>
    </Navbar>
    <NavItemContainer isDark={isDark} isSelected={nav}>
        <li>
            <a href="#home">Home</a>
        </li>
        <li>
            <a href="#Skills">Skills</a>
        </li>
        <li>
        <a href="#Projects">Projects</a>
        </li>
        <li>
        <a href="#Certificate">Certificates</a>
        </li>
    </NavItemContainer>
   
    </>
  )
}

export default Header