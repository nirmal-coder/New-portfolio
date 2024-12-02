import React, { useContext, useEffect, useState } from 'react'
import Popup from 'reactjs-popup';
import { Container, MainContainer , CustomSlider, PopupContainer, DetailsContainer, ImageContainer } from "./styledComponent"
import ThemeContext from '../../ThemeContext'
import Slider from "react-slick";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill, BsGithub } from "react-icons/bs";
import { HiExternalLink } from "react-icons/hi";
import { Button2, SquareBtn } from '../Button';

import 'reactjs-popup/dist/index.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css"
import ProjectsChart from '../ProjectsChart';


const projects = [
  {
    id : 1,
    title: "Nxtwatch",
    description:
      "A YouTube-like video streaming platform featuring video categories, themes (light/dark), and user authentication. Built with React.js, it offers seamless navigation and a responsive design.",
    technologies: ["React.js", "CSS", "API Integration", "React Router"],
    video : "/Nxtwatch-preview.mp4",
    image : "/nxtwatch-image.png",
    link : "https://nxtwatchnirmal.ccbp.tech/",
    github : "https://github.com/nirmal-coder/NxtWatch"
  },
  {
    id : 2,
    title: "Nxt Trendz",
    description:
      "An e-commerce web application showcasing product listings, search functionality, and filters. It includes login authentication and a cart feature for an enhanced shopping experience.",
    technologies: ["React.js", "Bootstrap", "CSS", "API Integration"],
    video : "/nxttrendz - Made with Clipchamp.mp4",
    image : "/Nxt-trendz-image.png",
    link : "https://nxttrends12.ccbp.tech/",
    github : "https://github.com/nirmal-coder/Nxt-Trendz-"
  },
  {
    id : 3,
    title: "Jobby App",
    description:
      "A job portal application that enables users to explore job listings, filter jobs by salary range and employment type, and view detailed job descriptions. Developed with React.js for dynamic routing and state management.",
    technologies: ["React.js", "CSS", "API Integration", "React Router"],
    video : "/jobby.mp4",
    image : "/jobby-image.png",
    link : "https://myjobbyapp12.ccbp.tech/",
    github : "https://github.com/nirmal-coder/Jobby-App"
  },
  
  {
    id : 4,
    title: "IPL Dashboard",
    description:
      "A sports-themed app displaying team statistics, recent matches, and detailed match summaries. Designed for a seamless user experience with API integration.",
    technologies: ["React.js", "CSS", "API Integration"],
    video : "/ipl - Made with Clipchamp.mp4",
    image : "/ipl-image.png",
    link : "https://ipldashboardnk.ccbp.tech/",
    github : ""
  },
  {
    id : 5,
    title: "Gradient Generator",
    description:
      "A creative tool that allows users to generate linear gradient backgrounds by selecting colors and directions, providing a preview for easy design customization.",
    technologies: ["React.js", "CSS"],
    video : "/gradient generator - Made with Clipchamp.mp4",
    image : "/gradient-image.png",
    link : "https://gradientnirmal.ccbp.tech/",
    github : "https://github.com/nirmal-coder/Gradient-Generator"
  },
  {
    id : 6,
    title: "Emoji Game",
    description:
      "A fun and interactive game where players match emojis without repeating selections. Features include score tracking and visual feedback.",
    technologies: ["React.js", "CSS", "State Management"],
    video : "/emoji app - Made with Clipchamp.mp4",
    image : "/emoji-image.png",
    link : "https://emojigamevnk.ccbp.tech/",
    github : ""
  },
  {
    id : 7,
    title: "Match Game",
    description:
      "An engaging game where players match images with corresponding categories as quickly as possible. It includes timer-based gameplay and dynamic updates.",
    technologies: ["React.js", "CSS", "State Management"],
    video : "/match game - Made with Clipchamp.mp4",
    image : "/Match-game-image.png",
    link : "https://gamenk.ccbp.tech/",
    github : "https://github.com/nirmal-coder/Match-Game"
  },
  
  
];



const Projects = () => {
  const {isDark} = useContext(ThemeContext);
  const [clickedProject , changeClicked] = useState(0)
  const [isPopupOpen, setPopupOpen] = useState(false);

  useEffect(() => {
    if (isPopupOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      // Cleanup in case the component unmounts
      document.body.style.overflow = 'unset';
    };
  }, [isPopupOpen]);

  const handleMouseEnter = (event) => {
    const video = event.currentTarget.querySelector('video');
    if (video && video.paused) {
      video.play().catch((error) => console.error('Video play error:', error));
    }
  };
  
  const handleMouseLeave = (event) => {
    const video = event.currentTarget.querySelector('video');
    if (video && !video.paused) {
      video.pause();
      video.currentTime = 0;
    }
  };

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: isDark ?  "#ffffff" : "#000000", // Background color for the arrow
          width: "30px",
          height: "30px",
          borderRadius: "50%", // Optional: Circular arrow
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1,
        }}
        onClick={onClick}
      >
        <span
          style={{
            color: isDark ?  "#ffffff" : "#000000" , // Arrow icon color
            fontSize: "20px",
          }}
        >
          <BsArrowRightCircleFill />
        </span>
      </div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: isDark ? "#ffffff" : "#000000", // Background color for the arrow
          width: "30px",
          height: "30px",
          borderRadius: "50%",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1,
        }}
        onClick={onClick}
      >
        <span
          style={{
            color: isDark ?  "#ffffff" : "#000000", // Arrow icon color
            fontSize: "20px",
          }}
        >
          <BsArrowLeftCircleFill />
        </span>
      </div>
    );
  }
  
  const getRotatedArray = () => {
    const project = [...projects];
    const rotate = project.slice(clickedProject).concat(project.slice(0, clickedProject));
    console.log(rotate)
    return rotate
  };
  
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const settingInside = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  
  return (
    <MainContainer isDark={isDark} id="Projects">
      <Container isDark={isDark} data-aos="fade-right"
    data-aos-duration="500"
    data-aos-easing="ease-out"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
      <h2>Projects</h2>
      <CustomSlider className="slider-container" isDark={isDark}>
      <Slider {...settings}>
        {projects.map(each => (
          <Popup modal trigger={<div key={each.id} onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave} className='slideItem' onOpen={() => setPopupOpen(true)}
          onClose={() => setPopupOpen(false)} >
          <video width="100%" height="100%" muted onClick={()=> changeClicked(each.id -1)}>
          <source src={each.video} type="video/mp4" />
          Your browser does not support the video.
        </video>
        <h6 className='title'>{each.title}</h6>
      </div>}>
          {close =>
            (
              <PopupContainer>
              <Slider key={clickedProject} {...settingInside}>
                  {getRotatedArray().map(each => (
                    <DetailsContainer key={each.id} width="100%" height="100%" isDark={isDark} >
                    <ImageContainer>
                    <img src={each.image} alt={each.title} data-aos="fade-right"
    data-aos-duration="500"
    data-aos-easing="ease-out"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-center"/>
                  
                      <ProjectsChart id={each.id -1} className="project-chart" data-aos="fade-left"
    data-aos-duration="500"
    data-aos-easing="ease-out"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-center"/>
                 
                    </ImageContainer>
                    <h2 data-aos="fade-right"
    data-aos-duration="500"
    data-aos-easing="ease-out"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">{each.title}</h2>
                    <p data-aos="fade-right"
    data-aos-duration="500"
    data-aos-easing="ease-out"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">{each.description}</p>
                    <div className='btn-con' data-aos="fade-up"
    data-aos-duration="500"
    data-aos-easing="ease-out"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
                      <SquareBtn>
                          <a href={each.link} target="_blank" rel="noopener noreferrer">Live Link <HiExternalLink /></a>
                            
                      </SquareBtn>
                      {each.github ? <Button2><a href={each.github} target="_blank" rel="noopener noreferrer"><BsGithub /></a></Button2> : null}
                    </div>
                    
                    
                  </DetailsContainer>
                  )
                )}
              </Slider>
          </PopupContainer>
            )
          }
          </Popup>
        ))}
      </Slider>
    </CustomSlider>
      </Container>
    </MainContainer>
  )
}

export default Projects