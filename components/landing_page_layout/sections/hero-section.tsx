'use client';

import { Button } from '@mantine/core';
import Image from 'next/image';
import heroImage from '@/public/images/hero-image-fix.png';

// component import
import Container from '../container';
import GooglePlayButton from '../google-play-button';

// icons import
import { GoDownload } from 'react-icons/go';
import DownloadButton from '../download-button';

import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section>
      <Container>
        <div className='flex flex-col lg:flex-row gap-8 justify-between lg:items-center'>
          <div className='flex flex-col w-6/12 max-md:ml-0 max-md:w-full'>
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
            >
              <div className='flex flex-col self-stretch px-5 my-auto max-md:mt-10 max-md:max-w-full'>
                <div className='text-4xl font-bold text-white leading-[3rem]'>
                  Unlock Better Sleep, <br />
                  Unleash Better Day With
                </div>
                <div className='mt-4 text-7xl font-bold text-white max-md:mt-10 max-md:max-w-full max-md:text-4xl'>SleepDiary</div>
                <div className='mt-12 max-md:mt-10 max-md:max-w-full'>
                  <div className='flex flex-col md:flex-row gap-5'>
                    <DownloadButton />
                    <GooglePlayButton />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
          >
            <div className='hidden lg:block'>
              <Image
                src={heroImage}
                alt='Feature image'
                width={450}
                height={450}
                placeholder='blur'
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
