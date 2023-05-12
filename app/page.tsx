import ClientOnly from "./components/ClientOnly"
import Container from "./components/Container"
import { AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai"
import { BsGithub } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import Card from "./components/Card";
import Image from 'next/image';


export default function Home() {
  return (
   <ClientOnly>
    
      <div className="
      
        h-screen
        w-screen
        bg-custom-500
        overflow-y-auto   
      ">
        <Container>
            <div className=" grid grid-cols-1 xl:grid-cols-2 gap-2">
                <div className=" pt-28 ">
                  <div className="bg-transparent bg-opacity-35 shadow-md  border-1 border-none  rounded-lg h-full p-4">
                    <h1 className="xl:text-6xl md:text-3xl text-extrabold text-center text-white  pb-10 pt-15">
                       Bonke Sam
                    </h1>
                    <h1 className="xl:text-5xl md:text-2xl text-bold text-custom-600 text-center pb-2">
                      FullStack Software Engineer
                    </h1>

                    <p className="text-center xl:text-xl text-sm text-white p-5" >
                    
                      I'm a fullstack software engineer with a passion for creating beautiful and functional applications. I focus on clean code and attention to detail to deliver high-quality software that meets the needs of users and clients.
                    </p>
                  </div>            
                </div>
                <div className="rounded-full md:overflow-hidden p-28">
                    <div className="bg-transparent bg-opacity-35 shadow-md border-1 border-none  rounded-lg h-full">
                        
                          <img src="/images/bonke.png" alt="Bonke" />
                        
                  </div>         

                </div>
            </div>
            <div className="flex
                  flex-row
                  items-center
                  justify-between
                  gap-3
                  md:gap-0
                  font-semibold
                  pt-3
                  text-white
                  pb-5
            ">
              <AiFillLinkedin size={50}/>
              <AiFillTwitterCircle size={50}/>
              <BsGithub size={50}/>
              <MdEmail size={50}/>
            </div>

            <hr className="xl:p-5 p-3 text-white text-xl border-1"/>

            
            </Container>   
            
            <Container>
                <div className="bg-transparent bg-opacity-35 shadow-md border-1 border-none  rounded-lg p-4">
                <div className="z-index-0">

                    <h1 className="xl:text-6xl md:text-3xl text-extrabold text-center text-white pb-3 md:pt-2 pt-4 md:pb-5">
                            My Projects
                    </h1>

                    <div className='grid 
                          sm:grid-cols-1
                          md:grid-cols-1
                          lg:grid-cols-3
                          xl:grid-cols-3
                          2xl:grid-cols-3 
                          gap-5
                          relative'>
                        
                          <Card 
                          image='/images/netflix.jpg'
                          label="Netflix clone"
                          content="I built a Netflix clone using Next.js, MongoDB, Prisma, and Next Auth. The clone includes user authentication, browsing, search, and responsive design. This project showcases my skills in full-stack web development and database design."
                          />
                       
                        
                          <Card 
                          image='/images/bnb.jpg'
                          label="Airbnb clone"
                          content="Using cutting-edge technologies such as Next.js, Typescript, MongoDB, Prisma, and Next Auth, I built an exceptional Airbnb clone that delivers the best user experience possible. I demonstrated my ability to create complex applications with ease and to implement security features such as authentication and database management flawlessly."
                          />
                       

                        <Card 
                        image='/images/bonke.png'
                        label="Personal Portfolio"
                        content="As an aspiring developer, I recently built my portfolio using Next.js and TypeScript. The combination of these powerful tools allowed me to create a modern, performant, and type-safe website that showcases my skills and experience."
                        />
                    </div>
                  </div>

                </div>
                <hr className="xl:p-5 p-3 text-white text-xl border-1"/>
            

            </Container>
            

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

                            <div className="border-1 border-white rounded-lg">
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


                              <div className="flex flex-row-3">
                                <div className='aspect-square relative overflow-hidden rounded-2xl'>
                                    <Image 
                                        fill
                                        alt='Technology1'
                                        src="/images/tech1.png"
                                        className='object-cover w-full group-hover:scale-125 transition'
                                    />
                                </div> 

                                <div className='aspect-square relative overflow-hidden       rounded-2xl'>
                                    <Image 
                                        fill
                                        alt='Technology1'
                                        src="/images/tech1.png"
                                        className='object-cover w-full group-hover:scale-125 transition'
                                    /> 
                                </div>                       
                                
                              </div>                       
                                                         
                            </div>                          
                    </div>s
                </div>

            </Container>
            
      </div> 
   </ClientOnly>
    
  )
}
