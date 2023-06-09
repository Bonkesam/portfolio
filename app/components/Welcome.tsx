import React from 'react'
import { AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';
import { BsGithub } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import Container from './Container';
import Image from 'next/image';
const Welcome = () => {
  return (
    <Container>
    <div className=" grid grid-cols-1 xl:grid-cols-2 gap-1 md:gap-2">
      <div className=" pt-28 ">
        <div className="bg-transparent bg-opacity-35 shadow-md  border-1 border-none  rounded-lg h-full p-4">
          <h1 className="text-4xl xl:text-[65px] text-center text-white  pb-10 pt-15">
            Hi, I&apos;m <span className="text-custom-600 font-bold">Bonke Sam</span>
          </h1>
          <h1 className=" text-2xl xl:text-5xl  text-bold text-custom-600 text-center pb-2">
            FullStack Software Engineer
          </h1>

          <p className="text-center text-md xl:text-xl text-white pt-10 px-4 pb-10 leading-1.5" >

            I&apos;m a fullstack software engineer with a passion for creating beautiful and functional applications. I focus on clean code and attention to detail to deliver high-quality software that meets the needs of users and clients.
          </p>
        </div>
      </div>
      <div >
        <div className="bg-transparent bg-opacity-35 shadow-md border-1 border-none rounded-lg h-full">

        <Image src="/images/bonke.png" alt="Bonke" width={1000} height={1000} className="w-full h-full object-cover" />


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
      <a href="https://www.linkedin.com/in/bonke-sam/">
        <AiFillLinkedin size={50} />
      </a>
      <a href="https://twitter.com/ItsBonkeSam">
        <AiFillTwitterCircle size={50} />
      </a>
      <a href="https://github.com/Bonkesam">
        <BsGithub size={50} />
      </a>
      <a href="mailto:bonkesam9@gmail.com">
        <MdEmail size={50} />
      </a>
    </div>

    <hr className="xl:p-5 p-0 text-white text-xl border-1" />


  </Container>
  )
}

export default Welcome;
