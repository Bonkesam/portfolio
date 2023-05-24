'use client';
import React from 'react'
import Container from './Container';
import Card from './Card';

const Projects = () => {
  return (
    <Container>
          <div className="bg-transparent bg-opacity-35 shadow-md border-1 border-none  rounded-lg p-4">
            <div className="z-index-0">

              <h1 className=" text-3xl xl:text-6xl text-center text-white pb-1 xl:pb-3 xl:pt-2 pt-2 xl:pt-4 ">
                My Projects
              </h1>

              <div className='grid 
                          sm:grid-cols-1
                          md:grid-cols-1
                          lg:grid-cols-3
                          xl:grid-cols-3
                          2xl:grid-cols-3 
                          gap-1
                          xl:gap-5
                          relative'>

                <a  href='https://watchflix-iota.vercel.app/' >       
                  <Card
                    image='/images/netflix.jpg'
                    label="Netflix clone"
                    content="I built a Netflix clone using Next.js, MongoDB, Prisma, and Next Auth. The clone includes user authentication, browsing, search, and responsive design. This project showcases my skills in full-stack web development and database design."
                  />
                </a>  

                <a href='https://air-rent.vercel.app/'>
                  <Card
                    image='/images/bnb.jpg'
                    label="Airbnb clone"
                    content="Using cutting-edge technologies such as Next.js, Typescript, MongoDB, Prisma, and Next Auth, I built an exceptional Airbnb clone that delivers the best user experience possible. I demonstrated my ability to create complex applications with ease and to implement security features such as authentication and database management flawlessly."
                  />
                </a>

                <Card
                  image='/images/bonke.png'
                  label="Personal Portfolio"
                  content="As an aspiring developer, I recently built my portfolio using Next.js and TypeScript. The combination of these powerful tools allowed me to create a modern, performant, and type-safe website that showcases my skills and experience."
                />
              </div>
            </div>

          </div>
          <hr className="xl:p-5 p-3 text-white text-xl border-1" />


        </Container>
  )
}

export default Projects;
