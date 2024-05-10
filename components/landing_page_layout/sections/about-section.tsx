'use client';

import React from 'react';
// next js import
import Image from 'next/image';
// image import
import aboutImage from '@/public/images/about-image.png';
// component import
import Container from '../container';

import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section id='about' className='py-10'>
      <Container>
        <div className='flex flex-col lg:flex-row gap-10 justify-center items-center mb-10'>
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
          >
            <div className='flex justify-center'>
              <Image
                src={aboutImage}
                alt='Feature image'
                width={450}
                height={450}
                placeholder='blur'
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
          >
            <div className='max-w-[38rem]'>
              <h2 className='text-3xl font-bold mb-6'>About</h2>
              <p className='text-lg'>
                Aplikasi SleepDiary adalah teman tidur Anda yang setia, membantu Anda memantau dan mencatat kualitas tidur Anda dari waktu ke waktu. Dengan fitur-fitur seperti grafik analisis pola tidur, reminder tidur, dan rekomendasi yang
                disesuaikan, Anda dapat dengan mudah meningkatkan kualitas tidur Anda. Temukan pola tidur Anda dan faktor-faktor yang mempengaruhinya, dan bangun setiap hari merasa segar dan siap menghadapi hari dengan semangat!
              </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default AboutSection;
