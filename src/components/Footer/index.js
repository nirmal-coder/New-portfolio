import React, { useContext } from 'react'
import { ButtonContainer, FooterContainer } from './styledComponent'
import ThemeContext from '../../ThemeContext'
import { Button1, Button2, Button3 } from '../Button'

import { BsGithub } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'
import { FaLinkedin } from 'react-icons/fa'

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();


const Footer = () => {
    const {isDark} = useContext(ThemeContext)
  return (
    <FooterContainer isDark={isDark} >
        <ButtonContainer data-aos="fade-left"
    data-aos-duration="1000"
    data-aos-easing="ease-out"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
      <Button1 >
        <a href="https://www.linkedin.com/in/nirmal-kumarv/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
      </Button1>
      <Button2>
        <a href="https://github.com/nirmal-coder" target="_blank" rel="noopener noreferrer">
          <BsGithub />
        </a>
      </Button2>
      <Button3>
        
        <a href="mailto:v.nirmalkumar@gmail.com">
          <MdEmail />
        </a>
      </Button3>
    </ButtonContainer>
      <p>&copy; {new Date().getFullYear()} Nirmal Kumar. All Rights Reserved.</p>
    </FooterContainer>
  )
}

export default Footer