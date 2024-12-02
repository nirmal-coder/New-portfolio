
import React, { useContext} from 'react'

import { Container, Description, MainContainer, Tabs } from "./styledComponent"
import { FaGraduationCap } from "react-icons/fa";

import ThemeContext from '../../ThemeContext'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();


const Education = () => {
  const {isDark} = useContext(ThemeContext);
  
  
  return (
    <MainContainer isDark={isDark}>
      <Container isDark={isDark} data-aos="fade-up"
    data-aos-duration="500"
    data-aos-easing="linear"
    data-aos-mirror="true"
    data-aos-once="false"
   >
        <h2>Education</h2>
        
          <Tabs isDark={isDark} >
          <div className='header'>
          <FaGraduationCap />
          <h3 id="Nxtwave">Nxtwave</h3>
          </div>
          <Description isDark={isDark}>
          <div>
          <h5>Nxtwave Disruptive Technologies (Academy)</h5>
          <p>Sep 2023 - Ongoing</p>
          </div>
          
          <p className='des'>-Industry Ready Certification in Full-stack Development </p>
        </Description>
          </Tabs>
        
        
        <Tabs isDark={isDark} >
        <div className='header'>
          <FaGraduationCap />
          <h3 id="Diploma">Diploma CSE</h3>
          </div>
          <Description isDark={isDark}>
          <div>
          <h5>KONGU HI-TEK POLYTECHNIC COLLEGE</h5>
          <p>2022 / 2025</p>
          </div>
          
          <p className='des'>-Diploma in Computer Science</p>
        </Description>
          </Tabs>
      </Container>
    </MainContainer>
  )
}

export default Education