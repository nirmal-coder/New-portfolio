import React, { useContext, useEffect, useState } from 'react'
import { Container, MainContainer } from "./styledComponent"
import {Chrono} from 'react-chrono'
import ThemeContext from '../../ThemeContext';
const courses = [
  {
    date: "February 2024",
    cardTitle: "Build Your Own Static Website",
    media: {
      name: "static website certificate",
      source: {
        url: "/static.png" // Path to the certificate image
      },
      type: "IMAGE"
    },
    cardDetailedText: "This course taught me the fundamentals of building a static website using HTML and CSS, including responsive design techniques.",
    topicsLearned: [
      "Basics of HTML5 and CSS3",
      "CSS Box Model",
      "Introduction to Bootstrap and Flex Layout",
      "Bootstrap Utility Classes and Components",
      "Website Layout Development"
    ]
  },
  {
    date: "February 2024",
    cardTitle: "Build Your Own Responsive Website",
    media: {
      name: "responsive website certificate",
      source: {
        url: "/responsive bootsptap.png" // Path to the certificate image
      },
      type: "IMAGE"
    },
    cardDetailedText: "In this course, I learned how to create responsive websites using Bootstrap and CSS to ensure compatibility across various devices.",
    topicsLearned: [
      "Bootstrap Grid System",
      "CSS Specificity",
      "CSS Cascading and Inheritance",
      "Bootstrap Flex Utilities"
    ]
  },
  {
    date: "May 2024",
    cardTitle: "Programming Foundations with Python",
    media: {
      name: "python programming certificate",
      source: {
        url: "/python.png" // Path to the certificate image
      },
      type: "IMAGE"
    },
    cardDetailedText: "This course focused on the core principles of Python programming, including loops, conditionals, functions, and object-oriented programming.",
    topicsLearned: [
      "Loops & Conditionals",
      "Lists, Tuples & Sets",
      "Dictionaries",
      "Functions & Recursion",
      "OOP Concepts"
    ]
  },
  {
    date: "June 2024",
    cardTitle: "Build Your Own Dynamic Web Application",
    media: {
      name: "dynamic web application certificate",
      source: {
        url: "/Dynamic web site.png" // Path to the certificate image
      },
      type: "IMAGE"
    },
    cardDetailedText: "This course taught me how to build dynamic web applications using JavaScript, covering topics like the DOM, fetch API, and local storage.",
    topicsLearned: [
      "Introduction to JS & Variables",
      "Arrays and Objects",
      "Fetch & Callback",
      "Building Wikipedia Search Application",
      "DOM & Event Fundamentals",
      "JSON & Local Storage",
      "Forms",
      "Conditionals and Loops"
    ]
  },
  {
    date: "June 2024",
    cardTitle: "JavaScript Essentials",
    media: {
      name: "javascript essentials certificate",
      source: {
        url: "/javasript essentials.png" // Path to the certificate image
      },
      type: "IMAGE"
    },
    cardDetailedText: "Focused on mastering JavaScript fundamentals, including ES6 features, asynchronous programming, and understanding the JavaScript engine.",
    topicsLearned: [
      "Factory and Constructor Functions",
      "Prototype and Classes",
      "Asynchronous JavaScript",
      "Scope & Hoisting",
      "Array Methods"
    ]
  },
  {
    date: "July 2024",
    cardTitle: "Responsive Web Design using Flexbox",
    media: {
      name: "flexbox responsive design certificate",
      source: {
        url: "/responsive web design.png" // Path to the certificate image
      },
      type: "IMAGE"
    },
    cardDetailedText: "Mastered the techniques of creating responsive web layouts with Flexbox, making it easier to design for mobile-first applications.",
    topicsLearned: [
      "CSS Flexbox",
      "CSS Media Queries",
      "CSS Box Sizing",
      "Developing Responsive Layouts"
    ]
  },
  {
    date: "August 2024",
    cardTitle: "Node.js",
    media: {
      name: "node js certificate",
      source: {
        url: "/node js.png" // Path to the certificate image
      },
      type: "IMAGE"
    },
    cardDetailedText: "Learned the fundamentals of Node.js, including building a basic HTTP server, working with Express.js, and building secure APIs.",
    topicsLearned: [
      "Modules in Node.js",
      "HTTP Server",
      "ExpressJS Server Framework",
      "CRUD APIs",
      "ExpressJS Middlewares",
      "JSON Web Token",
      "Secure APIs"
    ]
  }
];

courses.reverse();




const Certificate = () => {

  const [isMobile, setIsMobile] = useState(false);
  const {isDark} = useContext(ThemeContext);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767); // Set mobile break-point
    };
    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check

    return () => window.removeEventListener("resize", handleResize);
  }, [isMobile]);

  const getTheme = () => ({
    secondary: "#F5F5F5",
    cardBgColor: isDark ? "#111111" : "#F5F5F5",
    cardForeColor: isDark ? "#ffffff" : "#111111",
    titleColorActive: "#111111",
    cardTitleColor: isDark ? "#ffffff" : "#111111",
    cardDetailsColor : isDark ? "#ffffff" : "#111111"
  });

  
  
  return (
    <MainContainer isDark={isDark} id="Certificate">
      <Container isDark={isDark}>
        <h2>Certificates</h2>
        <div>
      <Chrono items={courses} mode={isMobile ? "VERTICAL" : "VERTICAL_ALTERNATING"} hideControls={true} key={isDark} scrollable disableToolbar  focusActiveItemOnLoad
        theme={getTheme()}
      >
        
      </Chrono>
    </div>
      </Container>
    </MainContainer>
  )
}

export default Certificate
