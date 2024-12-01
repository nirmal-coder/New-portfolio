import React, { useContext } from 'react'
import { ButtonWrapper1, ButtonWrapper2, ButtonWrapper3, ButtonWrapper4, HireMeButton , ButtonWrapper5 ,SquareBtn1 } from './styledComponent'
import ThemeContext from '../../ThemeContext'




export const Button1 = ({children ,props}) => {
  const {isDark} = useContext(ThemeContext)
    
  return (
    <ButtonWrapper1>
            <HireMeButton isDark={isDark}>{children}</HireMeButton>
                </ButtonWrapper1>
  )
}

export const Button2 = ({children ,props}) => {
  const {isDark} = useContext(ThemeContext)
    
  return (
    <ButtonWrapper2>
            <HireMeButton isDark={isDark}>{children}</HireMeButton>
                </ButtonWrapper2>
  )
}

export const Button3 = ({children ,props}) => {
  const {isDark} = useContext(ThemeContext)
    
  return (
    <ButtonWrapper3>
            <HireMeButton isDark={isDark}>{children}</HireMeButton>
                </ButtonWrapper3>
  )
}

export const Button4 = ({children ,props}) => {
  const {isDark} = useContext(ThemeContext)
    
  return (
    <ButtonWrapper4 >
            <HireMeButton isDark={isDark}>{children}</HireMeButton>
                </ButtonWrapper4>
  )
}

export const SquareBtn =({children ,props})=>{
  const {isDark} = useContext(ThemeContext);
  return (
    <ButtonWrapper5 >
            <SquareBtn1 isDark={isDark}>{children}</SquareBtn1>
                </ButtonWrapper5>
  )
}