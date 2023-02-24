import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#31335b] text-gray-100'>
        <div className=' flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-[#b1cb58] text-gray-100 '>About Me </p>
                </div>
                <div className='py-4'>
                  <p className='text-4xl text-[25px]'>Recent graduate with a degree in Computer Science and experience in cloud infrastructure and automation. Proficient in
AWS and Azure, with a strong understanding of DevOps principles and experience utilizing CI/CD pipelines. Strong
problem-solving skills and ability to work collaboratively in a team environment. Seeking a Junior Cloud DevOps position
to continue learning and growing in the field.</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default About