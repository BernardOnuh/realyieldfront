import Layout from '../components/Layout';
import { ConnectWallet } from '@thirdweb-dev/react'
import React,{useState, useEffect} from 'react';
import Staked from '../components/stake';

const Stake =() =>{

    return(
        <div className='bg-gradient-to-t from-purple-900 to-black w-screen h-max px-5'>
        <Staked/>
        </div>
    )
}

export default Stake;
