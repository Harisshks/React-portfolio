import Navbar from '../components/Navbar'
import myim from '../assests/img/IMG_1471.jpg'
import '../assests/css/style.css';
import { React } from 'react';
const Profile = () => {
  return (
    <>
      <Navbar />
      <div className='h-screen w-screen  bg-orange-100 bg-opacity-40 flex  flex-col items-center'>
        <div className='h-screen w-screen flex justify-center'>
          <div className='h-screen w-[60%] flex flex-col justify-start my-20 items-center ml-6'>
            <div className="text-black w-1/2 h-1/10 my-10 font-semibold text-5xl flex justify-center items-center">
              Hii! I'm&nbsp;<span className="text-orange-500">Harissh</span></div>
            <div className=' w-[80%]  text-black h-[20%] my-5 font-thin text-3xl justify-center items-center text-justify'>Creative and detail-oriented college student with a passion for coding and storytelling. Experienced in Android development and YouTube content creation,
              with a focus on App Development. Constantly learning and adapting to new technologies to bring innovative ideas to life.</div>
          </div>
          <div className='h-screen w-[40%] flex justify-center items-start my-28 '>
            <div className='h-screen w-[60%]  rounded-full'><img src={myim} className='rounded-full border-2 border-r-orange-600'></img></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile
