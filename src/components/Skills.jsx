import React from 'react'
import AWS from '../assets/aws.png'
import Terra from '../assets/Terraform.svg'
import Python from '../assets/python.png'
import Azure from '../assets/azure.png'
import RCT from '../assets/react.png'
import SF from '../assets/salesforce.png'
import TW from '../assets/tailwind.png'
import Docker from '../assets/docker.png'


const Skills = () => {
  return (
    <div name='Skills' className=' w-full h-screen bg-[#31335b] text-gray-100'>

        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-[#b1cb58]    '>Skills</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-lg shadow-blue-200 hover:scale-110 duration-500'>
                    <img src={AWS} alt="AWS icon" className='w-20 mx-auto '/>
                    <p className='my-4'>AWS</p>
                </div>
                <div className='shadow-lg shadow-blue-200 hover:scale-110 duration-500'>
                    <img src={Terra} alt="Terraform icon" style={{width: '120px'}} className='w-20 mx-auto '/>
                    <p className='my-4'>Terraform</p>
                </div>
                <div className='shadow-lg shadow-blue-200 hover:scale-110 duration-500'>
                    <img src={Python} alt="Pythonicon" className='w-20 mx-auto '/>
                    <p className='my-4'>Python</p>
                </div>
                <div className='shadow-lg shadow-blue-200 hover:scale-110 duration-500'>
                    <img src={Azure} alt="Git icon" className='w-20 mx-auto  '/>
                    <p className='my-4'>Azure</p>
                </div>
                <div className='shadow-lg shadow-blue-200 hover:scale-110 duration-500'>
                    <img src={RCT} alt="React icon" className='w-20 mx-auto '/>
                    <p className='my-4'>React.JS</p>
                </div>
                <div className='shadow-lg shadow-blue-200 hover:scale-110 duration-500'>
                    <img src={SF} alt="Salesforce icon" style={{width: '100px'}} className='w-20 mx-auto my-2'/>
                    <p className='my-4'>Salesforce</p>
                </div>
                <div className='shadow-lg shadow-blue-200 hover:scale-110 duration-500'>
                    <img src={TW} alt="Tailwind icon" className='w-20 mx-auto '/>
                    <p className='my-4'>Tailwind CSS</p>
                </div>
                <div className='shadow-lg shadow-blue-200 hover:scale-110 duration-500 '>
                    <img src={Docker} alt="HTML icon" style={{width: '90px'}} className='w-20 mx-auto '/>
                    <p className='my-4'>Docker</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Skills