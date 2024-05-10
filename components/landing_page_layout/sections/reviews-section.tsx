'use client';

import React from 'react';

// compoennt import
import ReviewCarousel from '../review-carousel';

import { motion } from 'framer-motion';

const ReviewsSection = () => {
  return (
    <section
      id='reviews'
      className='py-10'
    >
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
      >
        <h3 className='text-3xl font-bold text-center mb-10'>User Reviews</h3>
      </motion.div>
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
      >
        <ReviewCarousel />
      </motion.div>
    </section>
  );
};

export default ReviewsSection;
