import React, { useContext , useState} from 'react'
import { MdLightMode } from "react-icons/md";
import { IoMoonSharp  } from "react-icons/io5";
import {  BiChevronsDown, BiChevronsUp } from "react-icons/bi";
import {ListMd, ListSm,Navbar, NavButton, SmallNavItems, ThemeButton } from "./styledComponent"

import ThemeContext from '../../ThemeContext';

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
    <Navbar isDark={isDark}>
        
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
            <li><a href="#Skills">Skills</a></li>
            <li><a href="#Projects">Projects</a></li>
            <li><a href="#Certificate">Certificate</a></li>
            
            <li>
                <ThemeButton isDark={isDark} onClick={change}>{isDark? <MdLightMode /> : <IoMoonSharp />}</ThemeButton>
            </li>
            </ul>
        </ListMd>
    </Navbar>
    <SmallNavItems isDark={isDark} isSelected={nav}>
        <li>
            <a href="#Skills">Skills</a>
        </li>
        <li>
        <a href="#Projects">Projects</a>
        </li>
        <li>
        <a href="#Certificate">Certificates</a>
        </li>
    </SmallNavItems>
    </>
  )
}

export default Header