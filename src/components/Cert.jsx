import React from 'react'
import SA from '../assets/ca.png'
import CP from '../assets/cp.png'

const Cert = () => {
  return (
    <div name='Cert' className='bg-[#31335b] h-screen flex justify-center items-center p-4 text-gray-100'>
        <div className='max-w-[1000px] mx-auto flex flex-col justify-center w-full max-h-[100px]'>
        <div>
        <p className='text-4xl font-bold inline border-b-4 border-[#b1cb58] text-gray-100 '>Certifications</p>
            </div>
        {/** Main Container From Images  */}
        <div className='w-full grid grid-cols-2 gap-6 text-center py-8'>
        <div className='shadow-md shadow-blue-200 hover:scale-110 duration-500'>
                    <img src={SA} alt="Solutions Architect" className='w-20 mx-auto ' style={{width: '380px', height:'350px'}}/>
                    <p className='my-4 text-bold text-[20px]'>AWS Solutions Architect Associate SAA-003</p>
                </div>
                <div className='shadow-md shadow-blue-200 hover:scale-110 duration-500'>
                    <img src={CP} alt="Cloud Practitioner" className='w-20 mx-auto ' style={{width: '380px', height:'350px'}}/>
                    <p className='my-4 text-bold text-[20px]'>AWS Cloud Practitioner</p>
                </div>


        </div>
    </div>
    </div>
  )
}

export default Cert