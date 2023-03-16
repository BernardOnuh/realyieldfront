import React from 'react';
import { useState,useEffect } from 'react';
import { ethers } from 'ethers';
import { ConnectWallet, useContract, useContractWrite, Web3Button, useAddress, useTokenBalance, useContractRead } from '@thirdweb-dev/react'
import BalanceOf from './ReadContract/balanceOf';
import Earned from './ReadContract/earned';
import Rewards from './ReadContract/rewards';
import Layout from '../Layout';
import Link from 'next/link';
import { NextPage } from 'next'


interface Props {
  data:any
}

const Staked:NextPage<Props> = ({data}) => {
      const address = useAddress();
      const [amountToStake, setAmountToStake ] = useState('');
      const [withdrawAmount, setWithdrawAmount] = useState('');
      const StakingcontractAddress = '0x1dd93d54A54A56761bdA2416B8429b64e19a7A03';
      const StakingTokenAddress = '0x665271f9C8CB4a3E438251d1Ec46413650F514D6';
      const RewardTokenAddress = '0x120DD0Cca327fAD5766a764B09aa672052a1F0aA';
      const { contract } = useContract(StakingTokenAddress);
      const { mutateAsync, isLoading, error} = useContractWrite( contract, 'approve');
      const { contract: stakingToken, isLoading:isStakingTokenLoading} = useContract(StakingTokenAddress);
      const { contract: rewardToken, isLoading:isRewardTokenLoading} = useContract(RewardTokenAddress);
      const { data: stakingTokenBalance, refetch: refetchStakingTokenBalance } = useTokenBalance(stakingToken, address);
      const { data: rewardTokenBalance, refetch: refetchRewardTokenBalance } = useTokenBalance(rewardToken, address);
      const {
        data: stakeInfo,
        refetch: refetchStakingInfo,
        isLoading: isStakeInfoLoading,
      } = useContractRead(contract, "balanceOf", address || "0");
      
      useEffect(() => {
        setInterval(() => {
          refetchData();
        }, 10000);
      }, []);
      
      const refetchData = () => {
        refetchRewardTokenBalance();
        refetchStakingTokenBalance();
        refetchStakingInfo();
      };
      
  
  return (
    <Layout title='stake'>
        <div>
          <div className="max-w-lg md:px-4 sm:px-3 p-8 mx-auto my-10 bg-purple-400 shadow rounded-xl shadow-slate-300">
            <h1 className="text-4xl font-medium text-white">RYD Staking Dapp</h1>
            <div className="my-5">
              <div className="flex items-center justify-center w-full py-3 my-3 space-x-2 text-center transition duration-150 border rounded-lg border-slate-200 text-slate-900 hover:border-slate-400 hover:text-slate-900 hover:shadow">
                {/* {web3Provider == null ? (
                  //run if null,
                  <button
                    className="py-2 px-2 font-medium text-white bg-[#7245FA] rounded transition duration-300"
                    onClick={connectWallet}
                  >
                    Connect Wallet
                  </button>
                ) : (
                  <div>
                    <p>
                      {web3Provider.provider.selectedAddress.slice(0, 6)}...
                      {web3Provider.provider.selectedAddress.slice(
                        web3Provider.provider.selectedAddress.length - 4,
                        web3Provider.provider.selectedAddress.length
                      )}
                    </p>
                  </div>
                )}*/}
                <ConnectWallet/>
              </div>
            </div>
            <div className="my-10">
              <div className="flex flex-col space-y-5">
                <label htmlFor="number">
                  <p className="pb-2 font-medium text-slate-900">
                    Total RYD: <span id="balance">
                      {stakingTokenBalance?.displayValue}
                    </span>
                    
                  </p>
                  <p className="pb-2 font-medium text-slate-900">
                    Available buy your RYD tokens Stake and get RWD tokens
                  </p>
                  <input
                  type ='number'
                  value = {amountToStake}
                  onChange={(e) => setAmountToStake(e.target.value)}
                  className="w-full text-black px-3 py-3 border rounded-lg border-slate-200 focus:outline-none focus:border-slate-500 bg-white hover:shadow"
                  placeholder="Enter amount to stake"
                  ></input>
                  <div className='py-2 px-6'>
                  <Web3Button
                  className="py-2 px-2 font-medium text-white bg-[#7245FA] rounded transition duration-300"
                  contractAddress={StakingTokenAddress}
                  action = {() => mutateAsync([StakingcontractAddress,ethers.utils.parseEther(amountToStake)])}
                  onSuccess={(result) => alert("Success!")}
                  accentColor= '#7245FA'
                  >Aprove</Web3Button>
                  </div>
                  <BalanceOf/>
                  <div className='py-2 px-6'>
                  <Web3Button
                  contractAddress={StakingcontractAddress}
                  action = {async (contract) => {
                    await contract.call(
                      'stake',
                      ethers.utils.parseEther(amountToStake)
                    );
                    } }>
                    Stake</Web3Button>
                    </div>
                    <Earned/>    
                <div className='py-2 px-6'>
                <Web3Button
                contractAddress={StakingcontractAddress}
                action = {async (contract) => {
                    await contract.call(
                      'getReward'
                      )
                  } }
                >Claim</Web3Button>
                </div>
                </label>
                <p className="pb-2 font-medium text-slate-900">
                    Total RWD: <span id="balance">
                      {rewardTokenBalance?.displayValue}
                    </span>
                  </p>
                
                <p className="pb-2 font-medium text-slate-900" id="status" style={{ color: "green" }}></p>
                <label htmlFor="number">
                  <p className="pb-2 font-medium text-slate-900">
                    Withdraw Token
                  </p>
                  
                  <input
                   type ='number'
                   value = {withdrawAmount}
                   onChange={(e) => setWithdrawAmount(e.target.value)}
                   className="w-full text-black px-3 py-3 border rounded-lg border-slate-200 focus:outline-none focus:border-slate-500 bg-white hover:shadow"
                   placeholder="Enter amount to Withdraw"
                  />
                  <div className='py-2 px-6'>
                  <Web3Button
                  contractAddress={StakingcontractAddress}
                  action = {async (contract) => {
                    await contract.call(
                      'withdraw',
                      ethers.utils.parseEther(withdrawAmount)
                    );
                    } }>
                    Unstake</Web3Button>
                    </div>
                    <Rewards/>
                </label>
                <p id="withdrawStatus" style={{ color: "green" }}></p>
              </div>
            </div>
          </div>
        </div>
        </Layout>
 );
}

export default Staked;