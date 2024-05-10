'use client';

import React from 'react';

// images import
import pencatat from '@/public/images/pencatat.png';
import reminder from '@/public/images/reminder.png';
import statistik from '@/public/images/statistik.png';

// component import
import FeatureCard from '../feature-card';
import Container from '../container';

import { motion } from 'framer-motion';

const features = [
  {
    featureImage: pencatat,
    title: 'Pencatat',
    description:
      'SleepDiary menawarkan fitur pencatatan tidur, di mana Anda dapat merekam detail tidur setiap malam. Pantau pola tidur Anda melalui grafik interaktif untuk pemahaman yang lebih baik dan perbaikan kualitas tidur secara keseluruhan.',
  },
  {
    featureImage: reminder,
    title: 'Reminder',
    description: 'SleepDiary menawarkan fitur pengingat, sehingga Anda tidak akan melewatkan jadwal tidur yang optimal. Tetap teratur dengan pengingat yang disesuaikan untuk membantu Anda memprioritaskan kesehatan tidur setiap hari.',
  },
  {
    featureImage: statistik,
    title: 'Statistik',
    description:
      'SleepDiary menawarkan grafik dan ringkasan pola tidur mingguan dan bulanan, memungkinkan Anda dengan mudah melacak pola tidur dari waktu ke waktu. Dapatkan wawasan berharga tentang bagaimana pola Anda sepanjang minggu dan bulan.',
  },
];

const FeaturesSection = () => {
  return (
    <section id='features' className='py-10'>
      <Container>
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
        >
          <div className='flex justify-center mb-10'>
            <div className='w-96 text-center'>
              <h3 className='text-3xl font-bold mb-2'>Features SleepDiary</h3>
              <p className='text-lg'>Dengan SleepDaily , Anda dapat megetahui pola tidur Anda dengan efektif dan efisien</p>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
        >
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                featureImage={feature.featureImage}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default FeaturesSection;
