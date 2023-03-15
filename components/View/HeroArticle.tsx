import *as React from 'react';
import ActiveLink from '../Layout/Header/activeLink';

const HeroArticle = () =>{
    return(
        <div>
            <h1 className='text-[42px] xl:text-6xl 2xl:text-8xl  font-bold leading-tight'> This is a DEMO of 
            <div> 
            REAL YIELD DApp
            <hr className='w-[120px] xl:w-[180px] 2xl:w-[280px] text-right mt-[-15px] xl:mt-[-20px] 2xl:mt-[-25px] border-[5px] xl:border-[10px] border-[#880088]'/>
            </div>
            </h1>
            <p className='text-md sm:text-xl lg:text-2xl font-medium my-5 lg:my-7'>
              This DApp allow you buy Real Yield Native token and Stake to recieve reward token,You can determine the time interver and claim your reward tokens.
            </p>
              <button 
              className='bg-[#880088] text-white font-medium rounded-[5px]  py-2 px-5 sm:py-2.5 sm:px-6 2xl:py-3 2xl:px-7 cursor-pointer hover:scale-95'>
                <ActiveLink href={"/stake"}>
                Launch DApp
                </ActiveLink>
              </button>
        </div> 
    )
}
export default HeroArticle;