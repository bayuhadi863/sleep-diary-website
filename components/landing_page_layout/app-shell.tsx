'use client';
// React import
// Mantine import
import { AppShell, Burger, Group, Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
// import { useDisclosure } from '@mantine/hooks/lib/index.mjs';
// Next JS import
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
// Components import
import { PrimaryButton } from './buttons';
import { OutlineButton } from './buttons';
import Container from './container';
// CSS import
import classes from './app-shell.module.css';
// Image Import
import appLogo from '@/public/images/app-logo.png';
// component import
import Footer from './footer';

const links = [
  {
    title: 'Home',
    href: '/#hero',
  },
  {
    title: 'About',
    href: '/#about',
  },
  {
    title: 'Features',
    href: '/#features',
  },
  {
    title: 'Reviews',
    href: '/#reviews',
  },
];

export function LandingPageAppShell({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  const [opened, { toggle }] = useDisclosure();

  const handleLinkPress = (href: string) => {
    toggle();
    router.push(href);
  };

  return (
    <AppShell
      header={{ height: 90 }}
      navbar={{ width: 300, breakpoint: 'sm', collapsed: { desktop: true, mobile: !opened } }}
    >
      <AppShell.Header
        className={classes.header}
        withBorder={false}
      >
        <div className='px-0 sm:px-4 lg:px-12 py-6 text-white'>
          <Group
            h='100%'
            px='md'
          >
            <Burger
              opened={opened}
              onClick={toggle}
              hiddenFrom='sm'
              size='sm'
            />
            <Group
              justify='space-between'
              style={{ flex: 1 }}
            >
              <Link
                href='/'
                className='flex gap-2 items-center '
              >
                <Image
                  src={appLogo}
                  alt='Logo of the application'
                  width={40}
                  height={40}
                  placeholder='blur'
                />
                <h1 className='text-xl font-bold'>SleepDiary</h1>
              </Link>

              <div className='hidden sm:flex gap-4 lg:gap-10 sm:items-center'>
                {links.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    className='text-sm border-b border-transparent hover:border-white transition-all'
                  >
                    {link.title}
                  </Link>
                ))}
              </div>

              {/* <Group
                ml='xl'
                gap={10}
                visibleFrom='sm'
              >
                <Button
                  component={Link}
                  href='/register'
                  variant='outline'
                  radius='md'
                >
                  Daftar
                </Button>
                <Button
                  component={Link}
                  href='/login'
                  variant='white'
                  radius='md'
                >
                  Masuk
                </Button>
              </Group> */}
            </Group>
          </Group>
        </div>
      </AppShell.Header>

      <AppShell.Navbar
        py='md'
        px='md'
        className={classes.navbar}
      >
        <div className='flex flex-col gap-6 ps-2'>
          {links.map((link, index) => (
            <div key={index}>
              <button
                onClick={() => handleLinkPress(link.href)}
                className='pb-1 text-sm border-b border-transparent hover:border-white transition-all'
              >
                {link.title}
              </button>
            </div>
          ))}
          {/* <div className='grid grid-cols-2 gap-4 mt-4'>
            <OutlineButton>Daftar</OutlineButton>
            <PrimaryButton>Masuk</PrimaryButton>
          </div> */}
        </div>
      </AppShell.Navbar>

      <AppShell.Main>
        {children}
        <Footer />
      </AppShell.Main>
    </AppShell>
  );
}
