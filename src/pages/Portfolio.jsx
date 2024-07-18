import React from 'react';
import Project from '../components/Project';
import '../styles.css';

const projects = [
  {
    title: 'Weathering the Dashboard',
    description: 'Search any city and discover its five day forecast.',
    link: 'https://duncanfd24.github.io/Weatheringthedashboard/',
    link2: 'https://github.com/duncanfd24/Weatheringthedashboard',
    imageUrl: 'https://cdn.wallpapersafari.com/69/45/lF1thv.jpg'
  },
  {
    title: 'Employee Payroll Data Management',
    description: 'Tool to manage your payroll data.',
    link: 'https://duncanfd24.github.io/Optimizing-Management-of-Employee-Payroll-Data/',
    link2: 'https://github.com/duncanfd24/Optimizing-Management-of-Employee-Payroll-Data',
    imageUrl: 'https://img.freepik.com/free-photo/top-view-payroll-concept-with-wooden-cubes_23-2149103955.jpg?t=st=1721262727~exp=1721266327~hmac=c00e8a5e686496f5184a8bb0e7d1a6c32d30b1a961e1ee699cce1c2c698e5fc5&w=900'
  },
  {
    title: 'Movie Night',
    description: 'Choose your next movie choice easily.',
    link: 'https://tawatson02.github.io/movie-night/',
    link2: 'https://github.com/tawatson02/movie-night',
    imageUrl: 'https://media.istockphoto.com/id/1396163273/vector/vector-realistic-isolated-retro-marquee-neon-billboard-with-electric-light-lamps-of-movie.jpg?s=612x612&w=0&k=20&c=8Uy2KIp0x7OlJIhkEOV5Pbb0vTKs7dnvfjCa7A1K3tc='
  },{
    title: 'NutriFit',
    description: 'Keep track of your nutrition and fitness all in one application.',
    link: 'https://nutrifit-47ii.onrender.com/',
    link2: 'https://github.com/rvanetta97/NutriFit',
    imageUrl: 'https://www.chirothinweightloss.com/wp-content/uploads/2018/11/exercise-vs-diet.jpeg'
  }, 
  {
    title: 'Taskboard Project',
    description: 'A simple Kan board for task management.',
    link: 'https://duncanfd24.github.io/Taskboard-Updates/',
    link2: 'https://github.com/duncanfd24/Taskboard-Updates',
    imageUrl: 'https://static.vecteezy.com/system/resources/previews/002/890/825/non_2x/scrum-task-board-or-kanban-board-visualizing-the-workflow-with-various-stages-of-work-process-and-colorful-cards-with-tasks-management-teamwork-concept-vector.jpg'
  },{
    title: 'Personal Blog',
    description: 'Make notes and updates for your personal blog.',
    link: 'https://duncanfd24.github.io/Personal-Blog-Updates/',
    link2: 'https://github.com/duncanfd24/Personal-Blog-Updates',
    imageUrl: 'https://th.bing.com/th?id=OIP.F7V7TpEd-tG3KSvM0jNrRgHaEi&w=319&h=195&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2'
  }, 
];

function Portfolio() {
  return (
    <div className="portfolio">
      <h2>My Portfolio</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            description={project.description}
            link={project.link}
            link2={project.link2}
            imageUrl={project.imageUrl}
            className="project-card"
          />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
