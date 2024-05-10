'use client';

import React from 'react';

// next js import
import Image from 'next/image';

// mantine import
import { Carousel } from '@mantine/carousel';

// images import
import reviewPhoto from '@/public/images/review-photo.png';
import aaronPhoto from '@/public/images/aaron.png';
import bitusPhoto from '@/public/images/bitus.png';
import ramaPhoto from '@/public/images/rama.png';
import firaPhoto from '@/public/images/fira.png';

// component import
import Container from './container';

const reviews = [
  {
    image: aaronPhoto,
    review: 'Yang saya sukai dari aplikasi ini adalah disini kita bisa melakukan tracking seberapa bagus kualitas tidur kita.',
    name: 'Aaron Febrian',
    job: 'Mahasiswa PENS',
  },
  {
    image: ramaPhoto,
    review: 'Tampilan aplikasinya bagus. Dengan adanya keterangan juga membantu pemahaman penggunaan aplikasi.',
    name: 'M. Ainur Ramadhan',
    job: 'Mahasiswa PENS',
  },
  {
    image: bitusPhoto,
    review: 'Saya suka dengan ui aplikasinya karena warnanya pas dan tampilannya yang minimalis.',
    name: 'Nabilatus Syaadah',
    job: 'Mahasiswa PENS',
  },
  {
    image: firaPhoto,
    review: 'Fungsionalitas aplikasinya bagus. Aplikasi ini akan sangat membantu aktivitas saya.',
    name: 'Alfira Putri',
    job: 'Mahasiswa PENS',
  },
];

const ReviewCarousel = () => {
  return (
    <Carousel
      withIndicators
      controlsOffset='xl'
      loop
    >
      {reviews.map((review, index) => (
        <Carousel.Slide key={index}>
          <div className=' bg-card px-8 py-8'>
            <Container className='flex flex-col md:flex-row gap-4 items-center'>
              <div>
                <Image
                  src={review.image}
                  alt='Reviewer photo'
                  width={150}
                  height={150}
                  // blurDataURL="data:..." automatically provided
                  placeholder='blur'
                  className='rounded-full'
                />
              </div>
              <div className='text-center md:text-start'>
                <p className='text-lg'>&ldquo;{review.review}&rdquo;</p>
                <p className='font-semibold mt-2'>{review.name}</p>
                <p className=''>{review.job}</p>
              </div>
            </Container>
          </div>
        </Carousel.Slide>
      ))}
    </Carousel>
  );
};

export default ReviewCarousel;
