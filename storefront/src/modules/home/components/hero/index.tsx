"use client"

import { Github } from "@medusajs/icons"
import { Heading } from "@medusajs/ui"
import Button from "@/modules/common/components/button"
import Image from "next/image"

const Hero = () => {
  return (
    <div className="h-[75vh] w-full relative bg-figma-header">
      <Image
        src="/hero-image.jpg"
        alt="Hero background"
        layout="fill"
        quality={100}
        priority
        className="opacity-20"
      />
      <div className="absolute inset-0 z-1 flex flex-col justify-center items-start text-left small:p-32 gap-6 px-6 small:px-32">
        <div className="max-w-2xl">
          <Heading
            level="h1"
            className="text-6xl small:text-[64px] leading-[76px] text-white font-bold mb-6"
          >
            Saver & Investor Analysis
          </Heading>

          <p className="leading-6 text-white/90 font-medium text-base mb-10 max-w-[599px]">
            Our Saver & Investor Analysis Service is built for Platforms and Distributors. It provides your business with on-demand access to research, data & insights from our team of specialist analysts.
          </p>
        </div>
        <a
          href="https://github.com/medusajs/b2b-starter-medusa"
          target="_blank"
        >
          <Button variant="primary" className="px-8 py-4">
            Find out more
          </Button>
        </a>
      </div>
    </div>
  )
}

export default Hero
