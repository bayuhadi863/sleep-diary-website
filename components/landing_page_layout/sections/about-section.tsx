import React from 'react';
import imageSource from '../../img/hp3.png';

const AboutSection = () => {
  const imageWidth = 551;
  const imageHeight = 534;
  const circleSize = Math.max(imageWidth, imageHeight) - 80; // Adjust the value '40' as needed

  return (
    <section className="min-h-screen flex items-center flex-col mx-auto max-w-7xl">
      <div className="flex items-center mb-10">
        <div className="relative flex-none mr-10">
          <div
            className="absolute rounded-full z-0"
            style={{
              width: `${circleSize}px`,
              height: `${circleSize}px`,
              backgroundColor: '#161618',
              top: `calc(50% - ${circleSize / 2}px)`,
              left: `calc(50% - ${circleSize / 2}px)`,
            }}
          ></div>
          <img
            src={imageSource.src}
            width={imageWidth}
            height={imageHeight}
            alt="About"
            className="max-w-none h-auto relative z-10"
          />
        </div>
        <div className="flex-grow">
          <h2 className="mb-8 text-[48px] font-bold">About</h2>
          <p className="[font-family:'Poppins',Helvetica] font-medium text-white text-[24px] tracking-[0] leading-[normal]">
            Aplikasi SleepDiary adalah teman tidur Anda yang setia, <br />
            membantu Anda memantau dan mencatat kualitas <br />
            tidur Anda dari waktu ke waktu. Dengan fitur-fitur seperti <br />
            grafik analisis pola tidur, reminder tidur, dan rekomendasi <br />
            yang disesuaikan, Anda dapat dengan mudah meningkatkan <br />
            kualitas tidur Anda. Temukan pola tidur Anda dan faktor-faktor yang mempengaruhinya, <br />
            dan bangun setiap hari merasa segar dan siap menghadapi hari dengan semangat!
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;