import React from 'react'


const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen bg-[#31335b]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-100 border-[#b1cb58]'> 
                    Work Experience
                </p>
                <p className='py-6 text-gray-100 '>Check out some of my recent work experience</p>

            </div>
            <div className='grid sm:grid-col-2 md:grid-cols-3 gap-4 '>
                <div className='shadow-lg shadow-white group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* <div>
                        <span></span>
                        <div>
                            <a href='/'>
                                <button></button>
                            </a>
                            <a href='/'>
                                <button></button>
                            </a>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>

    </div>
  )
}

export default Work