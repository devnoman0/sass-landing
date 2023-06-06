"use client";

import React from "react";
import Image from "next/image";
import Shape from "../public/shape.png";
import HeroBG from "../public/hero.png";
import Link from "next/link";

import { HiCheck } from "react-icons/hi";

const Hero = () => {
  return (
    <div className="max-w-7xl mx-auto h-screen flex flex-col">
      <Image
        src={Shape}
        className="absolute h-full -z-10 top-0 left-0"
        alt=""
      />

      <div className="flex items-center justify-between py-8 px-4 z-20 h-20">
        <h1 className="text-xl font-bold">SHOHAN.</h1>

        <div className="font-medium space-x-10">
          <Link href="/">Product</Link>
          <Link href="/">Template</Link>
          <Link href="/">Blog</Link>
          <Link href="/">Pricing</Link>
        </div>

        <div className="font-medium space-x-10">
          <Link href="/">Sign In</Link>
          <Link
            className="bg-primary-500 py-4 px-8 text-white rounded-custom"
            href="/"
          >
            Start Free
          </Link>
        </div>
      </div>

      <div className="flex justify-center flex-col flex-1 w-full md:w-2/4 lg:w-2/4 px-4">
        <p className="text-xl font-medium mb-2">
          Product Growth Solution in Single Platform.
        </p>
        <h1 className="text-4xl md:text-6xl font-bold md:leading-[75px] mb-2">
          Managing business payments has never been easier
        </h1>
        <p className="text-secondary-200 leading-[35px] text-xl">
          Never at water me might. On formed merits hunted unable <br /> merely
          by mr whence or. Possession the unpleasing simplicity <br /> her
          uncommonly.
        </p>

        <div className="flex items-center gap-4 shadow-custom bg-white p-5 w-full mt-5">
          <div className="flex flex-col flex-1 ">
            <label
              className="font-xl text-secondary-200 font-bold"
              htmlFor="email"
            >
              Register using email address
            </label>
            <input
              className="text-2xl text-black text-opacity-[0.4] font-semibold outline-none"
              name="email"
              type="email"
              placeholder="shohanux@gmail.com"
            />
          </div>
          <button className="bg-dark py-4 px-16 text-white font-bold text-xl">
            Submit
          </button>
        </div>

        <div className="flex gap-6 mt-8">
          <div className="flex items-center gap-2">
            <span className="p-1 rounded-full bg-primary-500 text-white">
              <HiCheck />
            </span>
            <span className="text-secondary-200">Free Register</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="p-1 rounded-full bg-primary-500 text-white">
              <HiCheck />
            </span>
            <span className="text-secondary-200">Great Service</span>
          </div>
        </div>
      </div>

      <Image
        src={HeroBG}
        alt=""
        className="hidden md:block lg:block absolute top-0 right-0"
      />
    </div>
  );
};

export default Hero;
