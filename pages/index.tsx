import Layout from '../components/Layout';
import Image from 'next/image';
import HeroArticle from '../components/View/HeroArticle'


export default function Home() {
  return (
    <>
    <Layout title='Home'>
      <div className='hero bg-gradient-to-r from-black via-violet-900 to-black px-20 flex flex-wrap items-center justify-between h-full w-full'>
      <div className="left  my-5 lg:my-3 w-full lg:w-[45%] xl:w-[45%]">
        <HeroArticle />
      </div>
      <div className="right w-full lg:w-[50%]">
          <img
          className='h-full w-full'
          src='/staking.png'
          alt=' Illustration showing staking Money' />
        </div>
    </div>
    </Layout>
    </>
  )
}
