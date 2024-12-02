import React, { useContext } from 'react'
import { ButtonContainer, Container, HeroContainer } from "./styledComponent"
import ThemeContext from '../../ThemeContext';
import { Button1, Button2, Button3, Button4 } from '../Button';
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsGithub } from "react-icons/bs";
import { IoDocumentSharp } from 'react-icons/io5';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Hero = () => {
    const { isDark} = useContext(ThemeContext);
  return (
    <HeroContainer isDark={isDark} id="home" >
        <Container isDark={isDark} data-aos="fade-right"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="true"
    data-aos-anchor-placement="top-center">
            <p>Hey 👋,I'm</p>
            <h1> Nirmal Kumar</h1>


            <p className='des-sm'>I’m a passionate frontend developer and full-stack enthusiast who loves turning ideas into functional, user-friendly web experiences.<br /> With a foundation in React.js and the MERN stack, I bring consistency, creativity, and a hunger for learning to every project.<br /> I’m driven by the excitement of solving problems through code and crafting solutions that make an impact.</p>


            <p className='des-lg'> I'm a passionate and ambitious frontend developer and full-stack enthusiast with a relentless curiosity for all things coding. From crafting seamless user experiences to building robust and scalable web applications, I thrive on turning creative ideas into impactful digital solutions.<br/>

            With a strong foundation in HTML, CSS, JavaScript, React.js, and the MERN stack, I specialize in designing intuitive and responsive interfaces that engage users. My journey has been driven by a deep love for learning, consistency in honing my skills, and an unyielding commitment to delivering high-quality results.<br/>

            I believe in the power of technology to solve real-world problems and am always eager to explore new tools, frameworks, and techniques. Whether it’s debugging a tricky piece of code, brainstorming innovative solutions, or mastering the latest trends in web development, I tackle every challenge with enthusiasm and perseverance.

            Being open to feedback and constantly seeking growth, I’m excited to collaborate with like-minded professionals, contribute to impactful projects, and make a difference through code. Let’s build something amazing together! 🚀</p>

            <ButtonContainer>
      <Button1>
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
      <Button4>
      <a href="/Nirmal_Kumar_2024-11-15-230733-latest.pdf" download="Nirmal_Kumar_Resume.pdf">
      <IoDocumentSharp />
        </a>
        
      </Button4>
    </ButtonContainer>

            
        </Container>
    </HeroContainer>
  )
}

export default Hero