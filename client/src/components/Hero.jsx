import React, { useState } from 'react'
import { assets } from './../assets/assets';
import { useNavigate } from 'react-router-dom';
import { Banner } from './Banner';
import VideoPlayerModal from './VideoPlayerModal';

const Hero = () => {
  const [open, setOpen] = useState(false);
  function handleWatchDemoClick() {
    setOpen(true);
  }
  function handleClose() {
    setOpen(false);
  }
  const navigate = useNavigate();
  return (
    <div className='px-4 sm:px-20 xl:px-32 relative inline-flex flex-col w-full justify-center bg-[url(/gradientBackground.png)] bg-cover bg-no-repeat min-h-screen'>
      <div className='text-center mb-6'>
        <h1 className='text-3xl sm-text-5xl md:text-6xl 2xl:text-7xl font-semibold mx-auto leading-[1.2]'>Supercharge Your Productivity<br /> with <span className='text-primary'>Geniva AI</span></h1>
        <p className='mt-4 max-w-xs sm:max-w-lg 2xl:max-w-xl m-auto max-sm:text-xs text-gray-600'>Discover an all-in-one AI platform designed to streamline your workflow, enhance creativity, and solve everyday business challenges</p>
      </div>
      <div className='flex flex-wrap justify-center gap-4 text-sm max-sm:text-xs'>
        <button onClick={()=>navigate('/ai')} className='bg-primary text-white px-10 py-3 rounded-lg hover:scale-102 active:scale-95 transition cursor-pointer'>Start creating now</button>
         <button className='bg-white px-10 py-3 rounded-lg hover:scale-102 border-gray-300 active:scale-95 transition cursor-pointer' onClick={handleWatchDemoClick}>Watch demo</button>
      </div>
         <VideoPlayerModal open={open} onClose={handleClose} />
      <div className='flex items-center gap-4 mt-8 mx-auto text-gray-600'>
        <img src={assets.user_group} alt='' className='h-8'/>Trusted by 10k+ People
      </div>

    </div>
  )
}

export default Hero
