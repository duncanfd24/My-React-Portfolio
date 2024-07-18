import React from 'react';
import Project from '../components/Project';

const projects = [
  {
    title: 'Weathering the Dashboard',
    description: 'Search any city and discover its five day forecast.',
    link: 'https://duncanfd24.github.io/Weatheringthedashboard/',
    imageUrl: 'https://cdn.wallpapersafari.com/69/45/lF1thv.jpg'
  },
  {
    title: 'Employee Payroll Data Management',
    description: 'Tool to manage your payroll data.',
    link: 'https://duncanfd24.github.io/Optimizing-Management-of-Employee-Payroll-Data/',
    imageUrl: 'https://img.freepik.com/free-photo/top-view-payroll-concept-with-wooden-cubes_23-2149103955.jpg?t=st=1721262727~exp=1721266327~hmac=c00e8a5e686496f5184a8bb0e7d1a6c32d30b1a961e1ee699cce1c2c698e5fc5&w=900'
  },
  {
    title: 'Movie Night',
    description: 'Choose your next movie choice easily.',
    link: 'https://tawatson02.github.io/movie-night/',
    imageUrl: 'https://media.istockphoto.com/id/1396163273/vector/vector-realistic-isolated-retro-marquee-neon-billboard-with-electric-light-lamps-of-movie.jpg?s=612x612&w=0&k=20&c=8Uy2KIp0x7OlJIhkEOV5Pbb0vTKs7dnvfjCa7A1K3tc='
  },{
    title: 'NutriFit',
    description: 'Keep track of your nutrition and fitness all in one application.',
    link: 'https://github.com/rvanetta97/NutriFit',
    imageUrl: 'https://www.chirothinweightloss.com/wp-content/uploads/2018/11/exercise-vs-diet.jpeg'
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
            imageUrl={project.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
