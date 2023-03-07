import React,{useState,useCallback} from 'react'
import {useDispatch, useSelector } from 'react-redux'
import { Grid, InputAdornment,OutlinedInput, Zoom, Tooltip } from '@mui/material'
import { Skeleton } from '@mui/material'
import {ConnectWallet, useTokenBalance, useContract, useSDK, useAddress } from "@thirdweb-dev/react"
import { UserWallet } from '@thirdweb-dev/sdk'



const Farm = () => {
    const [view, setView]= useState(0);
    const [wrapOpen,setWrapOpen]= useState(false);
    const [quantity,setQuantity]= useState<string>('');
    const changeView =(newView: number) => () =>{
        setView(newView);
        setQuantity("");
    }
    const sdk = useSDK();
    const contractAddress ={{0x7231C27Db9F194037ACdE4341F8B0CC42ae457Cc}}
    const walletAddress = useAddress();
    const { contract } =useContract( contractAddress, 'RYD');
    const { data,isLoading, error} =useTokenBalance(contract,walletAddress);
    
    

return(

     <div className='farm-view'>
        <Zoom in={true}>
            <div className='farm-card'>
            <Grid className='farm-card-grid' container direction='column' spacing={2}>
                <Grid item>
                    <div className='farm-card-header'>
                        <p className='farm-card-header-title'>Revenue Sharing</p>
                    </div>
                </Grid>
            </Grid>
            <Grid item>
                <div className='farm-card-metrics'>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                        <div className='farm-card-tvl'>
                        <p className='farm-card-metrics-title'> Total APR</p>
                        <p className='farm-card-metrics-value'>50%
                            <Skeleton width="150px"/>
                        </p>
                        </div>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <div className='farm-card-tvl'>
                            <p className='farm-card-metrics-title'>Staked RYD</p>
                            <p className='farm-card-metrics-value'>1,000,000
                                <Skeleton width="150px" />
                            </p>
                            </div>    
                        
                        </Grid>    
                    </Grid>
                </div>
            </Grid>

            <div className='farm-card-area'>
                <div className='farm-card-wallet-notification'>
                    <div className='farm-card-wallet-connect-btn'>
                        <ConnectWallet  />
                   </div>
                    <p className='farm-card-wallet-desc-text'>Connect your wallet to stake RYD tokens!</p>
                </div>

                <div>
                    <div className='farm-card-action-area'>
                        <div className='farm-card-action-stage-btns-wrap'>
                            <div onClick={changeView(0)} className='farm-card-action-stage-btn'>
                                <p className='p-farm-card-action-stage-btn'>Stake</p>
                            </div>
                            <div onClick={changeView(1)} className='farm-card-action-stage-btn'>
                                <p className='p-farm-card-action-stage-btn'>Unstake</p>
                            </div>
                        </div>
                        <div className='farm-card-action-row'>
                            <OutlinedInput 
                            type='number'
                            placeholder='Amount'
                            className='farm-card-action-input'
                            endAdornment={
                                <InputAdornment position= 'end'>
                                    <div className='farm-card-action-input-btn'>
                                      <p>Max</p>
                                    </div> 
                                </InputAdornment>
                            }
                            />
                            {view ===0 &&(
                            <div className="farm-card-tab-panel">
                                <div className='farm-card-tab-panel-btn'>
                                    <p className='p-farm-card-tab-panel-btn'>Approve</p>
                                </div>
                                <div className='farm-card-tab-panel-btn'>
                                    <p className='p-farm-card-tab-panel-btn'>Stake</p>
                                </div>
                            </div>
                            )}
                            {view ==1 &&(
                            <div className='farm-card-tab-panel'>
                                <div className='farm-card-tab-panel-btn'>
                                    <p className='p-farm-card-tab-panel-btn'>UnStake</p>
                                </div>
                            </div>
                            )}
                        </div>
                        <div className='farm-card-action-help-text'>
                            <p className='p-farm-card-action-help-text'>
                            Note: The "Approve" transaction is only needed when staking/unstaking for the first time; subsequent staking/unstaking only requires
                            you to perform the "Stake" or "Unstake" transaction.
                            </p>
                        </div>
                    </div>
                    <div className='farm-user-data'>
                    <div className='farm-staked-balance-wrap'>
                            <div className='farm-token-img'>
                                {/*<image/>*/}                        
                            </div>
                            <div className='farm-staked-balance-title'>RYD</div>
                            <div className='farm-staked-balance-value'>  
                            <div>
                            {isLoading && <div>Loading...</div>}
                            {error && <div>Error: {error}</div>}
                            {data && <div>Balance: {data}</div>}
                            </div>
                            </div>
                        </div>
                        <div className='farm-staked-balance-wrap'>
                            <div className='farm-token-img'>
                                {/*<image/>*/}                        
                            </div>
                            <p className='farm-staked-balance-title'>Your Staked RYD</p>
                            <p className='farm-staked-balance-value'>0
                                {}
                            </p>
                        </div>
                        <div className='farm-staked-balance-wrap'>
                            <div className='farm-token-img'>
                                {/*<image/>*/}                        
                            </div>
                            <p className='farm-staked-balance-title'>Your Reward SRYD</p>
                            <p className='farm-staked-balance-value'>0
                                {}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </Zoom>
    </div>
)
}

export default Farm;