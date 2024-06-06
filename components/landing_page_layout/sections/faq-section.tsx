'use client';

import Image from 'next/image';
import faqImage from '@/public/images/faq-image-fix.png';

// import { useState } from 'react';
import { Group, Text, Accordion } from '@mantine/core';
// import { useMediaQuery } from '@mantine/hooks';
import { motion } from 'framer-motion';
// component import
import Container from '../container';

const charactersList = [
  {
    id: 'apaitu',
    label: 'Apa itu SleepDiary?',
    content: (
      <Text size='l'>
        Aplikasi SleepDiary adalah teman Anda yang setia, dirancang untuk membantu Anda memantau dan mencatat kualitas tidur Anda dari waktu ke waktu. Aplikasi ini memungkinkan pengguna untuk meningkatkan kualitas tidur mereka
      </Text>
    ),
  },
  {
    id: 'fiturutama',
    label: 'Apa fitur utama Aplikasi SleepDiary?',
    content: (
      <Text size='l'>
        Fitur utama aplikasi SleepDiary adalah:
        <br />
        1. Grafik analisis pola tidur: Menampilkan pola tidur penguna dalam bentuk grafik untuk mempermuddah pemahaman dan penjelasan.
        <br />
        2. Reminder untuk waktu tidur: Memberi pengingat kepada penguna untuk tidur sesuai jadwal yang diimpkan.
        <br />
        3. Pemantauan kualitas tidur: Memungkinkan penguna untuk mencatat kualitas tidur mereka dari waktu ke waktu.
      </Text>
    ),
  },
  {
    id: 'normalwaktu',
    label: 'Berapa normalnya waktu tidur?',
    content: <Text size='l'>Waktu tidur yang disarankan untuk orang dewasa adalah antara 7 - 8 jam per hari.</Text>,
  },
];

interface AccordionLabelProps {
  label: string;
}

function AccordionLabel({ label }: AccordionLabelProps) {
  return (
    <Group wrap='nowrap'>
      <div>
        <Text size='xl'>{label}</Text>
      </div>
    </Group>
  );
}

function FAQSection() {
  const items = charactersList.map((item, index) => (
    <Accordion.Item
      value={item.id}
      key={item.label}
    >
      <Accordion.Control className='py-12 px-14 bg-gray-100 rounded-lg hover:bg-gray-700'>
        <AccordionLabel {...item} />
      </Accordion.Control>
      <Accordion.Panel className='p-6 rounded-lg shadow-md'>{item.content}</Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <Container>
      <div className=''>
        <h2 className='text-3xl font-bold mb-8 sm:text-4xl sm:mb-10'>FAQ</h2>
        <div className='flex gap-6 items-start w-full'>
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className='flex-grow w-full'
          >
            <Accordion
              chevronPosition='right'
              variant='separated'
              className='lg:mt-20 mb-8 sm:mb-10 w-full'
            >
              {items}
            </Accordion>
          </motion.div>
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className='hidden lg:block'
          >
            <div className='flex justify-center w-96 h-96'>
              <Image
                src={faqImage}
                alt='Sleepy Penguin'
                height={384}
                width={384}
                className=' h-96 w-96'
              />
            </div>
          </motion.div>
        </div>
      </div>
    </Container>
  );
}

export default FAQSection;
