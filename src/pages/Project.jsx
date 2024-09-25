import React from 'react';
import '../assests/css/card.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import gameImage from '../assests/img/port1.jpeg'; 
import calculator from '../assests/img/Calculator.png';
import rspimage from '../assests/img/rockps1.png';
import Navbar from '../components/Navbar';

const data = [
  {
    name: 'React-Portfolio',
    img: gameImage, 
    about: 'Explore my interactive portfolio built with React, showcasing projects, skills. Dive into a dynamic and responsive experience that highlights my work.',
    link:'https://github.com/Harisshks/REACT'
  },
  {
    name: 'Basic Calculator',
    img: calculator, 
    about: 'Developed a simple yet efficient calculator app using Kotlin, handling basic arithmetic operations. The app features with seamless functionality for everyday calculations',
    link:'https://github.com/Harisshks/Basiccalculator'
  },
  {
    name:'RockPaperScissor',
    img: rspimage, 
    about: 'Created an interactive Rock-Paper-Scissors game using Kotlin, with intuitive gameplay. The app offers a fun and simple way to challenge the computer with a classic game.',
    link:'https://github.com/Harisshks/RockPaperScissor'
  }
];

const Project = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true
  };

  return (
    <>
    <Navbar/>
      <div className='w-3/4 m-auto '>
        <div className='mt-20'>
          <Slider {...settings}>
            {data.map((g, index) => (
              <div key={index} className='bg-white h-[400px] text-black rounded-xl transform hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.6)] transition-transform duration-300 '>
                <div className='rounded-t-xl flex justify-center items-center'>
                  <img src={g.img} alt={g.name} className='rounded-t-xl h-full w-full' />
                </div>

                <div className='flex flex-col justify-center items-center gap-4 p-4'>
                  <p className='text-xl font-semibold'>{g.name}</p>
                  <p>{g.about}</p>
                </div>
                <div className='flex items-end justify-center'>
                  <div className='btn bg-black text-white text-lg px-6 py-1 rounded-xl hover:opacity-60  hover:bg-orange-500'><a href={g.link} target="_blank">Source</a></div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Project;
