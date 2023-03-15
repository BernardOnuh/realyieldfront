import Layout from '../components/Layout';
import { ConnectWallet } from '@thirdweb-dev/react'

const Stake =() =>{
    return(
        <Layout title='stake'>
            <div className='bg-gradient-to-r from-black to-violet-900 h-screen w-screen backdrop-blur-lg'>
                <div className='flex justify-center items-center py-10'>  
                    <ConnectWallet/>
                </div>  
             </div>
        </Layout>
    )
}

export default Stake