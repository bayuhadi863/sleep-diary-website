'use client';

// React import

// Mantine import
import { AppShell, Burger, Group, UnstyledButton, Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

// Next JS import
import Image from 'next/image';
import Link from 'next/link';

// Components import
import { PrimaryButton } from './buttons';
import { OutlineButton } from './buttons';
import Container from './container';

// CSS import
import classes from './app-shell.module.css';

// Image Import
import appLogo from '@/public/images/app-logo.png';

export function LandingPageAppShell({ children }: { children: React.ReactNode }) {
  const [opened, { toggle }] = useDisclosure();

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  return (
    <AppShell
      header={{ height: 100 }}
      navbar={{ width: 300, breakpoint: 'sm', collapsed: { desktop: true, mobile: !opened } }}
    >
      <AppShell.Header
        className={classes.header}
        withBorder={false}
      >
        <div className='px-0 sm:px-4 lg:px-12 py-6 '>
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
              <div className='flex gap-2 items-center '>
                <Image
                  src={appLogo}
                  alt='Logo of the application'
                  width={50}
                  height={50}
                  placeholder='blur'
                />
                <h1 className='text-xl font-bold'>SleepDiary</h1>
              </div>

              <div className='hidden sm:flex gap-4 lg:gap-10 sm:items-center'>
                <Link
                  href='/'
                  className='text-sm border-b border-transparent hover:border-white transition-all'
                >
                  Home
                </Link>
                <Link
                  href='/'
                  className='text-sm border-b border-transparent hover:border-white transition-all'
                >
                  About
                </Link>
                <Link
                  href='/'
                  className='text-sm border-b border-transparent hover:border-white transition-all'
                >
                  Features
                </Link>
              </div>

              <Group
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
              </Group>
            </Group>
          </Group>
        </div>
      </AppShell.Header>

      <AppShell.Navbar
        py='md'
        px='md'
        className={classes.navbar}
      >
        <div className='flex flex-col gap-6'>
          <div>
            <Link
              href='/'
              className='pb-1 text-sm border-b border-transparent hover:border-white transition-all'
            >
              Home
            </Link>
          </div>
          <div>
            <Link
              href='/'
              className='pb-1 text-sm border-b border-transparent hover:border-white transition-all'
            >
              About
            </Link>
          </div>
          <div>
            <Link
              href='/'
              className='pb-1 text-sm border-b border-transparent hover:border-white transition-all'
            >
              Features
            </Link>
          </div>
          <div className='grid grid-cols-2 gap-4 mt-4'>
            <OutlineButton>Daftar</OutlineButton>
            <PrimaryButton>Masuk</PrimaryButton>
          </div>
        </div>
      </AppShell.Navbar>

      <AppShell.Main>{children}</AppShell.Main>
      <AppShell.Footer
        withBorder={false}
        className={classes.footer}
      >
        <Container className='py-6'>
          <div className='flex justify-between items-center mb-8'>
            <div>
              <h1 className='text-xl font-bold'>SleepDiary</h1>
            </div>
            <div className='flex gap-4'>
              <Link
                href='/'
                className='text-sm border-b border-transparent hover:border-white transition-all'
              >
                Home
              </Link>
              <Link
                href='/'
                className='text-sm border-b border-transparent hover:border-white transition-all'
              >
                About
              </Link>
              <Link
                href='/'
                className='text-sm border-b border-transparent hover:border-white transition-all'
              >
                Features
              </Link>
            </div>
          </div>
          <p className='text-center text-xs text-gray-200'>Copyright © SleepDialy {currentYear}. Powered by Team B1. All Rights Reserved.</p>
        </Container>
      </AppShell.Footer>
    </AppShell>
  );
}
