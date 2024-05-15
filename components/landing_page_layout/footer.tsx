import React from 'react';

// next js import
import Link from 'next/link';
import Image from 'next/image';

// component import
import Container from './container';

// image import
import appLogo from '@/public/images/app-logo.png';
import { link } from 'fs';

// mantine import
import { TextInput, Button } from '@mantine/core';

// icons import
import { HiOutlineMail } from 'react-icons/hi';
import { FaTwitter, FaFacebookF, FaGithub } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';
import { IconBase } from 'react-icons/lib';

const links = [
  {
    category: 'Company',
    links: [
      { name: 'About Us', href: '/' },
      { name: 'FAQs', href: '/' },
      { name: 'Blog', href: '/' },
      { name: 'Contact Us', href: '/' },
    ],
  },
  {
    category: 'Others',
    links: [
      { name: 'Cookies', href: '/' },
      { name: 'Security', href: '/' },
      { name: 'Terms of Service', href: '/' },
      { name: 'Privacy Statement', href: '/' },
    ],
  },
];

const socialLinks = [
  {
    Icon: FaTwitter,
    href: '/',
  },
  {
    Icon: FaFacebookF,
    href: '/',
  },
  {
    Icon: RiInstagramFill,
    href: '/',
  },
  {
    Icon: FaGithub,
    href: '/',
  },
];

const Footer = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  return (
    <Container className='py-10 bg-card'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 border-b border-gray-700 pb-4'>
        <div>
          <Link
            href='/'
            className='flex gap-2 items-center'
          >
            <Image
              src={appLogo}
              alt='Logo of the application'
              width={40}
              height={40}
              placeholder='blur'
            />
            <h3 className='text-xl font-bold'>SleepDiary</h3>
          </Link>
          <div className='mt-4'>
            <p className='text-sm font-light text-gray-200'>SleepDiary adalah aplikasi pelacak tidur yang intuitif dan mudah digunakan. Teman setia dalam perjalanan menuju tidur yang lebih baik</p>
          </div>
        </div>
        <div className='grid grid-cols-2'>
          {links.map((link, index) => (
            <div
              key={index}
              className='text-sm'
            >
              <h4 className='uppercase font-semibold'>{link.category}</h4>
              <ul className='mt-4 font-light text-gray-200'>
                {link.links.map((item, index) => (
                  <li
                    key={index}
                    className='mb-2'
                  >
                    <Link
                      href={item.href}
                      className='hover:text-white'
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div>
          <h4 className='uppercase text-sm font-semibold mb-4'>Newsletter</h4>
          <div>
            <TextInput
              leftSectionPointerEvents='none'
              leftSection={<HiOutlineMail className='text-gray-500' />}
              placeholder='Enter your email address'
              radius='md'
              size='md'
            />
            <Button
              fullWidth
              size='md'
              radius='md'
              className='mt-3'
            >
              Subscribe Now
            </Button>
          </div>
        </div>
      </div>
      <div className='pt-4 flex flex-col-reverse md:flex-row items-center justify-between gap-4'>
        <p className='text-sm font-light text-gray-200'>© {currentYear}, B1 Agile Team</p>
        <div className='flex gap-8'>
          {socialLinks.map((socialLink, index) => (
            <Link
              key={index}
              href={socialLink.href}
              className='text-gray-200 hover:text-white'
            >
              <socialLink.Icon size={18} />
            </Link>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Footer;
