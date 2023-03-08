import React from 'react'
import {Link} from 'react-scroll'

const Contact = () => {
  return (
    <div name='contact' className='w-full  bg-[#31335b] flex justify-center items-center py-6 p-4 text-gray-100'>
       <div >
        <form method='POST' action='https://getform.io/f/2f03fb28-2d9b-4a67-94c7-953faa21e145' className='flex flex-col max-w-[600px]  w-full'>
            <div className='pb-8  '>
                <p className='text-4xl font-bold inline border-b-4 border-[#b1cb58]'>Contact</p>
                <p className=' py-4 '>Submit The Form below or Reach Out via Email : shivanshuverma687@gmail.com </p>

            
            </div>
            <input className='p-2  text-black' type=" text" placeholder='Name' name='name' />
            <input className='my-4 p-2 text-black '  type=" email" placeholder='Email' name='email' />
            <textarea className=' p-2 text-black' name='message' rows='10' placeholder='Message'></textarea>
            <button className=' bg-black text-gray-100  border-2 hover:bg-[#b1cb58] hover:border-gray-300 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
            <button className=' bg-black text-gray-100 border-2 hover:bg-blue-500 hover:border-gray-300 px-4 py-3 my-2 mx-auto flex items-center'>
            <Link  to="home"  smooth={true} duration={500}>
          Back to Top 
        </Link>
            </button>

        </form>
        </div>
       
        

    </div>
  )
}

export default Contact