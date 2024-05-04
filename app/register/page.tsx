import { Button } from '@mantine/core'
import Link from 'next/link'
import React from 'react'

const RegisterPage = () => {
  return (
    <div className="bg-white max-sm:hidden">
    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
      <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
        <div className="flex flex-col max-md:max-w-full max-sm:hidden">
          <div className="flex justify-center items-center px-16 py-20 text-white bg-slate-800 max-md:px-5 max-md:max-w-full max-sm:hidden">
            <div className="flex flex-col mt-28 mb-24 max-w-full w-[515px] max-md:my-10">
              <div className="flex flex-col px-5 text-5xl font-extrabold max-md:max-w-full max-md:text-4xl">
                <img
                  loading="lazy"
                  srcSet="..."
                  className="w-full aspect-square max-md:max-w-full"
                />
                <div className="mt-7 mr-9 ml-9 max-md:mx-2.5 max-md:text-4xl">
                  Selamat Datang
                </div>
              </div>
              <div className="mt-7 text-xl font-medium text-center max-md:max-w-full">
                SleepDiary adalah aplikasi membantu anda <br />
                memahami dan meningkatkan kualitas tidur sehat
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
        <div className="flex flex-col grow mt-40 max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-col self-center px-5 max-w-full text-black w-[458px]">
            <div className="flex gap-5 self-center">
              <img
                loading="lazy"
                srcSet="..."
                className="shrink-0 w-24 aspect-[0.8]"
              />
              <div className="flex flex-col my-auto">
                <div className="text-2xl font-bold text-center">
                  SleepDiary
                </div>
                <div className="mt-1.5 text-xs tracking-tighter">
                  Unlock Better Sleep, Unleash Better Days
                </div>
              </div>
            </div>
            <div className="mt-12 text-2xl font-[275] max-md:mt-10 max-md:max-w-full">
              Username
            </div>
            <div className="shrink-0 mt-2.5 rounded-xl border border-black border-solid bg-zinc-300 bg-opacity-0 h-[65px] max-md:max-w-full" />
            <div className="mt-3 text-2xl font-[275] max-md:max-w-full">
              Email
            </div>
            <div className="shrink-0 mt-2.5 rounded-xl border border-black border-solid bg-zinc-300 bg-opacity-0 h-[65px] max-md:max-w-full" />
            <div className="mt-4 text-2xl font-[275] max-md:max-w-full">
              Password
            </div>
            <div className="shrink-0 mt-2 rounded-xl border border-black border-solid bg-zinc-300 bg-opacity-0 h-[71px] max-md:max-w-full" />
            <div className="self-end mt-4 text-base font-[275]">
              Forgot Password?
            </div>
            <div className="justify-center items-center mt-3 max-md:max-w-full">
              <Link href="/register" passHref>
                <Button
                  component="a"
                  className="px-16 py-7 text-xl font-medium text-white rounded-xl bg-slate-800 max-md:px-5"
                >
                Sign up
                </Button>
              </Link>
            </div>
            <div className="mt-8 text-base text-slate-800 max-md:max-w-full">
              Already have an account?{" "}
              <Link href="/login" passHref>
                <span className="font-bold cursor-pointer">Sign in</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default RegisterPage