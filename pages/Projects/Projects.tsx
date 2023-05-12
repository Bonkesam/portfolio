import React from 'react'
import Container from '../../app/components/Container';
import Card from '../../app/components/Card';

const Projects = () => {
  return (
    <div>
        <Container>
            <div>

              <h1 className="xl:text-6xl md:text-3xl text-extrabold text-center text-white pb-10 md:pt-2 pt-10 md:pb-5">
                       My Projects
              </h1>
            
              <div className='grid 
                    sm:grid-cols-2
                    md:grid-cols-3
                    lg:grid-cols-4
                    xl:grid-cols-5
                    2xl:grid-cols-6 gap-4'>
                  <Card 
                  image='/images/netflix.jpg'
                  content="I built a Netflix clone using Next.js, MongoDB, Prisma, and Next Auth. The clone includes user authentication, browsing, search, and responsive design. This project showcases my skills in full-stack web development and database design."
                  />

                  <Card 
                  image='/images/netflix.jpg'
                  content="I built a Netflix clone using Next.js, MongoDB, Prisma, and Next Auth. The clone includes user authentication, browsing, search, and responsive design. This project showcases my skills in full-stack web development and database design."
                  />

                  <Card 
                  image='/images/netflix.jpg'
                  content="I built a Netflix clone using Next.js, MongoDB, Prisma, and Next Auth. The clone includes user authentication, browsing, search, and responsive design. This project showcases my skills in full-stack web development and database design."
                  />
              </div>
            </div>
        </Container>
      
    </div>
  )
}

export default Projects;
