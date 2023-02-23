import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll'
import ME from '../assets/me.jpg'

const Home = () => {
  return (
    <div name = 'home' className='w-full h-screen bg-[#31335b]'>
      
      <div  className=' mx-auto px-2 flex flex-col justify-center   text-gray-100 text-[20px] h-full'>
        {/* Container*/}

        <div>
          <p className='font-bold text-center justify-center text-[40px] py-2 '>Welcome to My Portfolio !!</p>
        </div>
        
        <div className='w-full grid grid-cols-2 gap-4 text-center py-6'>
                <div className='shadow-lg hover:scale-110 duration-500 '>
                    <img src={ME} alt="ME" className='w-20 mx-auto ' style={{width: '350px', height:'420px'}}/>
                   
                </div>
        <div className='py-16'>
            <p>Hi, My Name is </p>
            <h1 className='text-4xl sm:text-7xl font-bold'> Shivanshu Verma</h1>
            <h2 className='text-4xl sm:text-6xl font-bold'> I'm a Cloud/Devops Engineer</h2>
            <p className='py-4 max-w-[1000px]'>I'm a Cloud Engineer specializing in developing, maintaining cloud Operations. Currently I'm focused on building responsive web applications.</p>
           
        
         </div>
      </div>
      <div className=' mx-auto justify-center'>
                <button className='border-2 group px-5 py-3 my-2 flex items-center hover: bg-black hover:border-white'>
                <Link  to="work"  smooth={true} duration={500}>
          View Projects
        </Link>
                <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3 ' />

                </span>
                 </button>


            </div>

    </div>
    </div>
  )
}

export default Home