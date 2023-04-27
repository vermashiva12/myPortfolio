import React,{useState} from 'react'
import {FaBars, FaTimes,FaGithub,FaLinkedin} from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from '../assets/logo.svg'
import {Link} from 'react-scroll'
import Re from '../assets/AAAAA.pdf'


export const Navbar = () => {
    const [nav, setNav] =useState(false)
    const handleClick = () => setNav(!nav)
  return (
    <div name='navbar' className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#31335b] text-gray-100'>
        <div>
            <img src= {Logo} alt="Logo" style={{width: '140px'}} />
        </div>
        
        {/** Main menu */}
        
            <ul className='hidden md:flex'>
                <li><Link  to="home"  smooth={true} duration={500}>
          Home
        </Link></li>
                <li>
                <Link  to="about"  smooth={true} duration={500}>
          About
        </Link>
                </li>
                <li>
                <Link  to="Skills"  smooth={true} duration={500}>
          Skills
        </Link>
                </li>
                <li><Link  to="Cert"  smooth={true} duration={500}>
                Certifications
        </Link></li>
                <li><Link  to="Projects"  smooth={true} duration={500}>
          Projects
        </Link></li>
               
                <li>
                <Link  to="contact"  smooth={true} duration={500}>
          Contact
        </Link>
                </li>
            </ul>
        
        {/** Hamburger */}
        <div onClick={handleClick} className='md:hidden z-10'>
           {!nav ?  <FaBars /> : <FaTimes />}
        </div>

        {/** Mobile */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#31335b] flex flex-col justify-center items-center'}>
                <li  className='py-6 text-4xl'><Link onClick={handleClick} to="home"  smooth={true} duration={500}>
          Home
        </Link></li>
                <li className='py-6 text-4xl'><Link onClick={handleClick} to="about"  smooth={true} duration={500}>
          About
        </Link></li>
                <li className='py-6 text-4xl'><Link onClick={handleClick}  to="Skills"  smooth={true} duration={500}>
          Skills
        </Link></li>
        <li className='py-6 text-4xl'><Link onClick={handleClick} to="Cert"  smooth={true} duration={500}>
                Certifications
        </Link></li>
                <li className='py-6 text-4xl'><Link onClick={handleClick} to="Projects"  smooth={true} duration={500}>
          Projects
        </Link></li>
               
                <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="contact"  smooth={true} duration={500}>
          Contact
        </Link>
                </li>
            </ul>

        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center  ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                    <a className='flex justify-between items-center w-full text-white'
                     href='https://www.linkedin.com/in/shivanshu-verma-624263128/'>
                        LinkedIn <FaLinkedin  size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center  ml-[-100px] hover:ml-[-10px] duration-300 bg-black'>
                    <a className='flex justify-between items-center w-full text-white'
                     href='https://github.com/vermashiva12'>
                        GitHub <FaGithub  size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center  ml-[-100px] hover:ml-[-10px] duration-300 bg-red-500'>
                    <a className='flex justify-between items-center w-full text-white'
                     href='mailto:shivanshuverma687@gmail.com'>
                        Email<HiOutlineMail  size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center  ml-[-100px] hover:ml-[-10px] duration-300 bg-yellow-500'>
                    <a className='flex justify-between items-center w-full text-white'
                     href={Re} target="_blank" rel="noreferrer">
                        Resume<BsFillPersonLinesFill  size={30}/>
                    </a>
                </li>

                
            </ul>


        </div>
        

    </div>
  )
}
