import React from 'react'
import Technologies from './Technologies';
import Container from './Container';

const Skills = () => {
  return (
    <div>
        <Container>
          <div className="bg-transparent bg-opacity-35 shadow-md border-1 border-none  rounded-lg p-4">
            <h1 className="xl:text-6xl md:text-3xl text-extrabold text-center text-white pb-3 md:pt-2 pt-4 md:pb-5">
              My Skills
            </h1>

            <div className='grid 
                          sm:grid-cols-1
                          md:grid-cols-1
                          lg:grid-cols-2
                          xl:grid-cols-2
                          2xl:grid-cols-2 
                          gap-5
                          relative
                          border-1
                          border-white'>

              <div className="border-3 border-white rounded-lg">
                <h2 className="text-white text-md xl:text-xl text-center">
                  Soft Skills
                </h2>
                <div className="flex flex-row text-white text-sm xl:text-md p-2">
                  <ul>
                    <li className="p-2">
                      <span className="text-custom-600">Communication:</span>  Clear and effective communication skills.
                    </li>
                    <li className="p-2">
                      <span className="text-custom-600">Teamwork:</span> Ability to work in a team and provide constructive feedback.
                    </li>
                    <li className="p-2">
                      <span className="text-custom-600">Adaptability:</span> Flexibility, open-mindedness, and willingness to learn new things.
                    </li>
                    <li className="p-2">
                      <span className="text-custom-600">Time management:</span> Strong time management skills to meet deadlines.
                    </li>
                    <li className="p-2">
                      <span className="text-custom-600">Problem-solving:</span>Analytical skills to identify potential solutions and implement them.
                    </li>
                    <li className="p-2">
                      <span className="text-custom-600">Attention to detail:</span> Meticulous and detail-oriented in writing code.
                    </li>
                    <li className="p-2">
                      <span className="text-custom-600">Creativity:</span> Innovative thinking to develop new ideas and solutions.
                    </li>
                  </ul>

                </div>
              </div>

              <div className="border-1 border-white rounded-lg">
                <h2 className="text-white text-md xl:text-xl text-center">
                  Technical Skills
                </h2>
                <Technologies />                
              </div>
            </div>
          </div>

        </Container>
      
    </div>
  )
}

export default Skills;
