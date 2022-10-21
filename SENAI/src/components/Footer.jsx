import React, {useState} from 'react'
import {
    FaGithub,
    FaInstagram,
    FaLinkedin,
} from 'react-icons/fa'

import parceriahuawei from '../assets/parcero_huawei.png'
import parceriasenai from '../assets/parcero_senai.png'
import logo from '../assets/logo_dialup.png'

import '../styles/footer.css'

const Footer = () => {
    return (
        <div className='w-full mt-10 bg-gradient-to-r from-black to-black text-gray-300 py-y px-2'>
            <div className='max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-500 py-8'>
                <div className='col-span-2 pt-8 md:pt-2'>
                    <p className='font-bold uppercase mb-1 '> send us an email </p>
                    <form className='flex flex-col sm:flex-row'>
                        <input type="email" placeholder='Enter email' className='w-full p-2 mr-4 rounded-md mb-4'/>
                        <button className='send p-2 mb-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300'> Send </button>
                    </form>
                </div>
            </div>

            <div className='flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-purple-500'>
                <p className='py-4 text-gray-500 cursor-no-drop'> @2022 DialUp. ALL rights reserved</p>
                <div className='flex justify-between sm:w-[300px] text-2xl items-center'>
                    <a href="https://www.huaweicloud.com/intl/pt-br/" className='hover:text-purple-600 hover:scale-110 transition ease-in-out delay-150 duration-300 w-36'>  <img src={parceriahuawei} className='imgha' alt="" /> </a>
                    <a href="https://www.sp.senai.br/" className='hover:text-purple-600 hover:scale-110 transition ease-in-out delay-150 duration-300 w-36'> <img src={parceriasenai} className='imgpar' alt="" /> </a>                
                </div>
            </div>

        </div>
    )
}
export default Footer