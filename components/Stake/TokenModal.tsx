import React, { useCallback, useState } from 'react';
import {useDispatch, useSelector } from 'react-redux';
import { Grid, InputAdornment,OutlinedInput, Zoom, Tooltip } from '@mui/material'
import { Skeleton } from '@mui/material'


return (
    <div className='farm-view'>
        <Zoom in={true}>
            <div className='farm-card'>
            <Grid className='farm-card-grid' container direction='column' spacing={2}>
                <Grid item>
                    <div className='farm-card-header'>
                        <p className='farm-card-header-title'>Revenue Sharing</p>
                        
                        <div onClick={handleWrapOpen} className='farm-card-wrap-btn'>
                            <p>Wrap</p>
                        </div>
                    </div>
                    <Wrap open={wrapOpen} handleClose={handleWrapClose}/>
                </Grid>
            </Grid>
            <Grid item>
                <div className='farm-card-metrics'>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                        <div className='farm-card-tvl'>
                        <p className='farm-card-metrics-title'> Total APR</p>
                        <p className='farm-card-metrics-value'>
                            <Skeleton width="150px"/>
                        </p>
                        </div>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <div className='farm-card-tvl'>
                            <p className='farm-card-metrics-title'>Staked RYD</p>
                            <p className='farm-card-metrics-value'>
                                <Skeleton width="150px" />
                            </p>
                            </div>    
                        
                        </Grid>    
                    </Grid>
                </div>
            </Grid>

            <div className='farm-card-area'>
                <div className='farm-card-wallet-notification'>
                    <div className='farm-card-wallet-connect-btn' onClick={}>
                        <p>Connect Wallet</p>
                    </div>
                    <p className='farm-card-wallet-desc-text'>Connect your wallet to stake RYD tokens!</p>
                </div>

                <div>
                    <div className='farm-card-action-area'>
                        <div className='farm-card-action-stage-btns-wrap'>
                            <div>
                                <p>Stake</p>
                            </div>
                            <div>
                                <p>Unstake</p>
                            </div>
                        </div>
                        <div className='farm-card-action-row'>
                            <OutlinedInput 
                            type='number'
                            placeholder='Amount'
                            className='farm-card-action-input'
                            value={quantity}
                            onChange={e => }
                            />
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </Zoom>
    </div>
)