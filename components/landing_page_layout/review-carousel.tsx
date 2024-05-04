'use client';

import React from 'react';

// next js import
import Image from 'next/image';

// mantine import
import { Carousel } from '@mantine/carousel';

// images import
import reviewPhoto from '@/public/images/review-photo.png';

// component import
import Container from './container';

const reviews = [
  {
    image: reviewPhoto,
    review: 'Sistem aplikasi yang diberikan sangat baik dan mudah untuk dimanfaatkan dalam mengelola waktu tidur saya',
    name: 'M. Ainur Ramadhan',
    job: 'Mahasiswa PENS',
  },
  {
    image: reviewPhoto,
    review: 'Sistem aplikasi yang diberikan sangat baik dan mudah untuk dimanfaatkan dalam mengelola waktu tidur saya',
    name: 'Hadyar Supriyanto',
    job: 'Mahasiswa PENS',
  },
  {
    image: reviewPhoto,
    review: 'Sistem aplikasi yang diberikan sangat baik dan mudah untuk dimanfaatkan dalam mengelola waktu tidur saya',
    name: 'Nabilatus Syaadah',
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
                />
              </div>
              <div className='text-center md:text-start'>
                <p className='text-lg'>{review.review}</p>
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
