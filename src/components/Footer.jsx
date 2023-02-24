import React from 'react'
import Logo from '../assets/logo.svg'


const Footer = () => {
  return (
    
    
    <div name='Footer' className='w-full h-[120px] justify-between items-center px-4 bg-[#2e305a] text-gray-100'>
        <div >
            
            <img src= {Logo} alt="Logo" style={{width: '90px'}} />
            
        </div>
        <div>
            <p className='text-right text-[11px] '> Copyright @ 2023 Shivanshu Verma. All Rights Reserved </p>
        </div>
    </div>
    
  )
}

export default Footer