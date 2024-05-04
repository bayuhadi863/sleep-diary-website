import { Button } from '@mantine/core'
import Image from 'next/image'

const Hero = () => {
  return (
    <section>
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col self-stretch px-5 my-auto max-md:mt-10 max-md:max-w-full">
            <div className="text-5xl font-bold text-white max-md:max-w-full max-md:text-4xl">
              Unlock Better Sleep, <br />
              Unleash Better Day With
            </div>
            <div className="mt-10 text-8xl font-bold text-white max-md:mt-10 max-md:max-w-full max-md:text-4xl">
              SleepDiary
            </div>
            <div className="mt-12 max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex gap-4 self-stretch py-8 pr-8 pl-4 my-auto w-full text-xl font-bold bg-white rounded-xl text-slate-800 max-md:pr-5 max-md:mt-10">
                    <div className="flex-auto my-auto">UNDUH SEKARANG</div>
                    <img
                      loading="lazy"
                      srcSet="..."
                      className="shrink-0 aspect-[1.19] fill-slate-800 w-[31px]"
                    />
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                  <img
                    loading="lazy"
                    srcSet="..."
                    className="grow w-full aspect-[2.63] max-md:mt-10"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            srcSet="..."
            className="grow w-full aspect-[0.84] max-md:mt-10 max-md:max-w-full"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero