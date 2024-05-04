import { StaticImageData } from 'next/image';
import Image from 'next/image';
import React from 'react';

const FeatureCard = ({ featureImage, title, description }: { featureImage: StaticImageData; title: string; description: string }) => {
  return (
    <div className='bg-card border-2 border-black rounded-lg px-6 pt-2 pb-6 shadow-card'>
      <div className='flex justify-center'>
        <Image
          src={featureImage}
          alt='Feature image'
          width={220}
          height={220}
          // blurDataURL="data:..." automatically provided
          placeholder='blur'
        />
      </div>
      <div>
        <h4 className='text-center text-2xl font-semibold mb-2'>{title}</h4>
        <p className='text-center text-sm'>{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
