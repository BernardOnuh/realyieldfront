import React from 'react';
import { useState, useEffect} from 'react';
import { ethers } from 'ethers';
import { ConnectWallet, useContract, useContractWrite, Web3Button, useAddress, useTokenBalance} from '@thirdweb-dev/react';
import { NextPage } from 'next'
import Layout from '../Layout'

interface Props {
    data:any
}

const Buye:NextPage<Props>=({data}) => {
    const address = useAddress();
    const [amountToBuy, setAmountToBuy ] = useState('');
    const StakingTokenAddress = '0x665271f9C8CB4a3E438251d1Ec46413650F514D6';
    const { contract } = useContract(StakingTokenAddress);
    const { mutateAsync, isLoading, error} = useContractWrite( contract, 'mint');
    const { contract: stakingToken, isLoading:isStakingTokenLoading} = useContract(StakingTokenAddress);
    const { data: stakingTokenBalance, refetch: refetchStakingTokenBalance } = useTokenBalance(stakingToken, address);
    


    return(
        <Layout title='buy'>
            <div className="max-w-lg md:px-4 sm:px-3 p-8 mx-auto my-10 bg-purple-400 shadow rounded-xl shadow-slate-300">
                <h1 className="text-4xl font-medium text-white">Buy RYD token</h1>
                    <div className='my-5'>
                    <div className="flex items-center justify-center w-full py-3 my-3 space-x-2 text-center transition duration-150 border rounded-lg border-slate-200 text-slate-900 hover:border-slate-400 hover:text-slate-900 hover:shadow">
                    <ConnectWallet/>
                    </div>
                    </div>
                    <div className='my-10'>
                        <div className='flex flex-col space-y-5'>
                            <label htmlFor='number'>
                            <p className="pb-2 font-medium text-slate-900">
                                Total RYD: <span id="balance">
                                {stakingTokenBalance?.displayValue}
                                </span>
                            </p>
                            <p className="pb-2 font-medium text-slate-900">
                            Buy your RYD token here
                            </p>
                            <input
                            type ='number'
                            value = {amountToBuy}
                            onChange={(e) => setAmountToBuy(e.target.value)}
                            className="w-full text-black px-3 py-3 border rounded-lg border-slate-200 focus:outline-none focus:border-slate-500 bg-white hover:shadow"
                            placeholder="Enter amount to buy"
                            ></input>
                            <div className='py-2 px-6'>
                            <Web3Button
                            className="py-2 px-2 font-medium text-white bg-[#7245FA] rounded transition duration-300"
                            contractAddress={StakingTokenAddress}
                            action = {() => mutateAsync([address,ethers.utils.parseEther(amountToBuy)])}
                            onSuccess={(result) => alert("Success!")}
                            accentColor= '#7245FA'
                            >Buy</Web3Button>
                            </div>
                            </label>
                        </div>
                    </div>
            </div>
        </Layout>
    );
};

export default Buye