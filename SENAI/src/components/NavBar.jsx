import React, { useState } from "react"
import {Link} from "react-router-dom" 
import { BsPerson } from 'react-icons/bs'
import { AiOutlineClose } from 'react-icons/ai'
import { HiOutlineMenu } from 'react-icons/hi'
import LogoImg from '../assets/logo.png'
import storage from '../store'
import { logout } from '../firebase'
import { useEffect } from "react"

const NavBar = () => {
    const [nav, setNav] = useState(false);
    const [logo, setLogo] = useState(false);
    const [logado, setLogado] = useState(false)

    const handleNav = () => {
        setNav(!nav)
        setLogo(!logo)
    }

    useEffect(()=>{
        try{
            let local = JSON.parse(localStorage.getItem('session')) || false
            if(local != false)
                setLogado(true)
        }catch{
            setLogado(false)
        }
    }, [])

    return (
        <div className='flex w-full justify-between items-center h-20 px-5 z-10 text-white fixed bg-black'>
            <div className={logo ? 'hidden' : 'block'}>
                <img src={LogoImg} className="w-14 hover:scale-110" />
            </div>

            <ul className='hidden md:flex space-x-10 text-lg'>
                {/* hover:text-COR <- para mudar a cor quando passa o mouse por cima*/}
               <a href='#home'> <li className="cursor-pointer hover:text-orange-600 duration-500" >HOME</li></a>
               <a href='#product'><li className="cursor-pointer hover:text-orange-600 duration-500" >PRODUCTS</li></a>
               <a href='#about'><li className="cursor-pointer hover:text-orange-600 duration-500" >ABOUT</li></a>
               <a href='#dev'> <li className="cursor-pointer hover:text-orange-600 duration-500" >DEVELOPERS</li></a>
            </ul>

            <div className='hidden md:flex'>
                {
                    !logado?
                        <>
                            <Link to='/login'>
                                <button to='/login' className="px-6 py-2 text-white transition-colors duration-500 border-2 rounded-lg shadow-xl  border-orange-600 shadow-orange-500/10 hover:bg-orange-600">SING IN</button>
                            </Link>
                            <Link to='/cadastro'>
                                <button to='/cadastro' className="px-6 py-2 text-white transition-colors duration-500 border-2 ml-4 rounded-lg shadow-xl bg-orange-600  border-orange-600 shadow-orange-500/10 hover:bg-orange-600">SING UP</button>
                            </Link>
                        </>
                    :
                    <button onClick={(event) => (logout(event), setLogado(false))} className="px-6 py-2 text-white transition-colors duration-500 border-2 ml-4 rounded-lg shadow-xl bg-orange-600  border-orange-600 shadow-orange-500/10 hover:bg-orange-600">LOGOUT</button>
                }
            </div>

            {/*  Hamburguer */}
            <div onClick={handleNav} className='md:hidden z-10 absolute right-5'>
                {nav ? <AiOutlineClose size={26} /> : <HiOutlineMenu size={30} />}
            </div>

            {/* Mobile menu dropdown */}
            <div onClick={handleNav} className={nav ? 'h-screen absolute text-white left-0 top-0 w-full bg-black px-7 flex flex-col items-center justify-center text-center' : 'absolute left-[-100%]'}>
                <ul>
                    <li className='border-b hover:text-orange-600 duration-500' htmlFor="">HOME</li>
                    <li className='border-b hover:text-orange-600 duration-500' htmlFor="">PRODUCTS</li>
                    <li className='border-b hover:text-orange-600 duration-500' htmlFor="">ABOUT</li>
                    <li className='border-b hover:text-orange-600 duration-500' htmlFor="">DEVELOPERS</li>
                    <div className='flex flex-col'>
                        <button className='my-4 px-6 py-2 text-white transition-colors duration-300 rounded-lg border-2 border-orange-600 shadow-orange-500/20 hover:bg-orange-600 rounded-lg shadow-xl'>SING IN</button>
                        <button className='my-4 px-6 py-2 text-white transition-colors duration-300 rounded-lg border-2 bg-orange-600 border-orange-600 shadow-orange-500/20 hover:bg-orange-600 rounded-lg shadow-xl'>SING IN</button>
                    </div>

                </ul>

            </div>



        </div>


    )

}

export default NavBar