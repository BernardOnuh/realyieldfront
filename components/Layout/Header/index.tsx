import React, {useState, useEffect} from 'react';
import {ConnectWallet } from "@thirdweb-dev/react";
import Link from 'next/link';
import ActiveLink from './activeLink';



const Header = () => {

return (
    <div className=' px-3 sm:px-5 md:px-7 lg:px-10 xl:px-12 2xl:px-14 shadow-md md:shadow-none pb-1 md:pb-0'>
      <div className='flex items-center  justify-between py-2 md:py-0 md:my-3 lg:my-4 xl:my-5'>
        <div className="left">
          <ActiveLink href = {'/'}>
            <img 
            // onClick={() => {
            //   router.reload()
            // }}
             className="w-32" src='/logo.png' alt='realyield-logo'/>
          </ActiveLink>  
        </div>
        <ul className = "flex items-center text-purple-500 hidden  md:flex">
        <li className="buy font-medium mx-3 px-3 cursor-pointer hover:text-white">
          <ActiveLink href={"/buy"}>
              Buy
            </ActiveLink>  
          </li>
          <li className="stake font-medium mx-3 px-3 cursor-pointer hover:text-white">
            <ActiveLink href={"/stake"}>
            Stake
            </ActiveLink>
          </li>
            <li>
            <ConnectWallet accentColor="#880088" colorMode="dark" />
            </li>
        </ul>
      </div>
      </div>
  )
}

export default Header;