'use client'

import Image from 'next/image';
import faqImage from '@/public/images/faq-image.png';

// import { useState } from 'react';
import { Group, Text, Accordion } from '@mantine/core';
// import { useMediaQuery } from '@mantine/hooks';
import { motion } from 'framer-motion';

const charactersList = [
  {
    id: 'apaitu',
    label: 'Apa itu SleepDiary?',
    content: "Aplikasi SleepDiary adalah teman Anda yang setia, dirancang untuk membantu Anda memantau dan mencatat kualitas tidur Anda dari waktu ke waktu. Aplikasi ini memungkinkan pengguna untuk meningkatkan kualitas tidur mereka",
  },
  {
    id: 'fiturutama',
    label: 'Apa fitur utama Aplikasi SleepDiary?',
    content: "Fitur utama aplikasi SleepDiary adalah:\n\n1. Grafik analisis pola tidur: Menampilkan pola tidur penguna dalam bentuk grafik untuk mempermuddah pemahaman dan penjelasan.\n\n2. Reminder untuk waktu tidur: Memberi pengingat kepada penguna untuk tidur sesuai jadwal yang diimpkan.\n\n3. Pemantauan kualitas tidur: Memungkinkan penguna untuk mencatat kualitas tidur mereka dari waktu ke waktu.",
  },
  {
    id: 'normalwaktu',
    label: 'Berapa normalnya waktu tidur?',
    content: 'Waktu tidur yang disarankan untuk orang dewasa adalah antara 7 - 8 jam per hari.',
  },
];

interface AccordionLabelProps {
  label: string;
}

function AccordionLabel({ label }: AccordionLabelProps) {
  return (
    <Group wrap="nowrap">
      <div>
        <Text size='xl'>{label}</Text>
      </div>
    </Group>
  );
}

function FAQSection() {
  const items = charactersList.map((item) => (
    <Accordion.Item value={item.id} key={item.label}>
      <Accordion.Control className="py-12 px-14 bg-gray-100 rounded-lg hover:bg-gray-700">
        <AccordionLabel {...item} />
      </Accordion.Control>
      <Accordion.Panel className="p-6 rounded-lg shadow-md">
        <Text size="l">{item.content}</Text>
      </Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <div className="max-w-screen-xl mx-auto px-4 flex flex-col-reverse sm:flex-row mt-12 sm:mt-20 mb-12 sm:mb-20">
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        className="w-full sm:w-2/3"
      >
        <h2 className="text-3xl font-bold mb-8 sm:text-4xl sm:mb-10">FAQ</h2>
        <Accordion 
          chevronPosition="right" 
          variant="separated" 
          className="mb-8 sm:mb-10"
        >
          {items}
        </Accordion>
      </motion.div>
      <motion.div
        initial={{ x: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        className="w-full sm:w-1/3 flex justify-center"
      >
        <Image
          src={faqImage}
          alt="Sleepy Penguin"
          className="block mx-auto w-64 h-64 rounded-full sm:w-96 sm:h-96"
        />
      </motion.div>
    </div>
  );
}

export default FAQSection;

