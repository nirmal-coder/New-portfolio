import React, { useContext } from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import { ChartContainer, MainContainer, LegendContainer, LegendItem, ColorBox } from './styledComponent';
import ThemeContext from '../../ThemeContext';

const projects = [
  {
    id: 1,
    title: 'Nxtwatch',
    languages: {
      React: 60,
      CSS: 20,
      APIIntegration: 20,
    },
  },
  {
    id: 2,
    title: 'Nxt Trendz',
    languages: {
      React: 50,
      Bootstrap: 30,
      CSS: 20,
    },
  },
  {
    id: 3,
    title: 'Jobby App',
    languages: {
      React: 50,
      CSS: 30,
      APIIntegration: 20,
    },
  },
  {
    id: 4,
    title: 'IPL Dashboard',
    languages: {
      React: 60,
      CSS: 20,
      APIIntegration: 20,
    },
  },
  {
    id: 5,
    title: 'Gradient Generator',
    languages: {
      React: 70,
      CSS: 30,
    },
  },
  {
    id: 6,
    title: 'Emoji Game',
    languages: {
      React: 50,
      CSS: 30,
      StateManagement: 20,
    },
  },
  {
    id: 7,
    title: 'Match Game',
    languages: {
      React: 50,
      CSS: 30,
      StateManagement: 20,
    },
  },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

const ProjectsChart = (props) => {
  const { id } = props;
  const { isDark } = useContext(ThemeContext);

  // Convert languages object into an array of {name, value} pairs for PieChart
  const languageData = Object.keys(projects[id].languages).map((key) => ({
    name: key,
    value: projects[id].languages[key],
  }));

  return (
    <MainContainer>
      <ChartContainer isDark={isDark}>
        <ResponsiveContainer width="100%" height="100%" isDark={isDark}>
          <PieChart>
            <Pie
              data={languageData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius="50%"
              fill="#8884d8"
              label
            >
              {languageData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </ChartContainer>
      <LegendContainer>
        {languageData.map((entry, index) => (
          <LegendItem key={entry.name} isDark={isDark}>
            <ColorBox color={COLORS[index % COLORS.length]} />
            {entry.name}
          </LegendItem>
        ))}
      </LegendContainer>
    </MainContainer>
  );
};

export default ProjectsChart;
