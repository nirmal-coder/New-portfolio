import React, { useContext } from 'react'
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { ChartContainer, Container, MainContainer , LegendContainer ,LegendItem , ColorBox  } from './styledComponent'
import ThemeContext from '../../ThemeContext'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const skillsData = [
    { skill: "HTML", proficiency: 95 },
    { skill: "CSS", proficiency: 85 },
    { skill: "JavaScript", proficiency: 80 },
    { skill: "React.js", proficiency: 85 },
    { skill: "Node.js", proficiency: 70 },
    { skill: "Python", proficiency: 60 },
    { skill: "C++", proficiency: 40 },
    { skill: "SQLite", proficiency: 75 },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#AF19FF", "#FF4B4B", "#FFA500" , "#E7DDFF"];


const Skills = () => {
    const {isDark} = useContext(ThemeContext)
  return (
    <MainContainer isDark={isDark} id="Skills">
        <h2>Skills</h2>
        <Container isDark={isDark}>
            
            <ChartContainer data-aos="fade-right"
    data-aos-duration="500"
    data-aos-easing="ease-out"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
            <ResponsiveContainer width="100%" height="100%">
            <PieChart>
      <Pie
        data={skillsData}
        dataKey="proficiency"
        nameKey="skill"
        cx="50%"
        cy="50%"
        outerRadius={90}
        fill="#8884d8"
        label
        
      >
        {skillsData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
            </ResponsiveContainer>
            </ChartContainer>
            <LegendContainer data-aos="fade-left"
    data-aos-duration="500"
    data-aos-easing="ease-out"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
          {skillsData.map((entry, index) => (
            <LegendItem key={entry.skill} isDark={isDark}>
              <ColorBox color={COLORS[index % COLORS.length]} />
              {entry.skill}
            </LegendItem>
          ))}
        </LegendContainer>
        </Container>
    </MainContainer>
  )
}

export default Skills