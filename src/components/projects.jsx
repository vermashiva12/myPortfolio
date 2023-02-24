import React from 'react'
import p1 from '../assets/p1.png'
import p2 from '../assets/p2.png'


const Projects  = () => {
  return (
    <div name='Projects' className='w-full  h-screen text-gray-100  bg-[#31335b]'> 
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-100 border-[#b1cb58]'>Projects</p>
                <p className='py-6'>Check Out some of My Recent Projects </p>
            </div>
            <div 
            className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6'>
                
                <div style={{backgroundImage: `url(${p1})` }} className='shadow-lg shadow-white group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/** Hover Effect */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-gray-100 tracking-wider'>
                           Deploy Infrastructure as Code Using Terraform & AWS

                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://github.com/vermashiva12/Terraform'>
                                <button className='text-gray-100 text-center rounded-lgpx-4 py-3 m-2 bg-gray-400 rounded-lg font-bold text-lg '>Source Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${p2})` }} className='shadow-lg shadow-white group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/** Hover Effect */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-gray-100 tracking-wider'>
                           Deploy WordPress Website Using Terraform & AWS

                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://github.com/vermashiva12/TerraformModule_A'>
                                <button className='text-gray-100 text-center rounded-lgpx-4 py-3 m-2 bg-gray-400 rounded-lg font-bold text-lg '>Source Code</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>


     </div>
  )
}

export default Projects 