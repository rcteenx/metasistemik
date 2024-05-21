import smd from "@/content/data/siteMetaData";
import { contHero, StaticPages } from "@/content/data";

import {
  barInfo,
  whyweneed,
  whatwegain,
  meetingTitle,
  meetingList,
  conditions,
} from "@/content/data";
import { rcHero, rVideo } from "@/public/assets/images";

import Hero from "@/components/sections/home/1-hero";
import InfoBar from "@/components/sections/home/2-info-bar";

import WhyWeNeed from "@/components/sections/home/b-1-why-we-need";
import WhatWeGain from "@/components/sections/home/b-1-what-we-gain";

import WeeklyMeetings from "@/components/sections/home/c-1-weekly-meetings";
import AttendenceContitions from "@/components/sections/home/c-2-att-conditions";
import Workshops from "@/components/sections/home/c-3-workshops";

import Support from "@/components/sections/home/x6-support";
import SocialMedia from "@/components/sections/common/z-social-media";
import IconComponent from "@/components/ui/icons/icons";

export async function generateMetadata() {
  return {
    title: smd.title + " - Reyhan Çetin",
  };
}

export default function Home() {
  return (
    <>
      <div
        className="text-center py-8 md:py-16 lg:py-24 bg-kocluk1 bg-opacity-10  bg-center
      bg-cover"
      >
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold ">
          <span className="">{contHero.h1a}</span>
          <br />
          <span className="inline-block xl:my-4 xl:whitespace-nowrap">
            {contHero.h1b}
          </span>
        </h1>
        <hr className="md:hidden" />
        <h2 className="mb-4 font-medium md:text-lg lg:text-3xl text-white bg-black/50">
          {contHero.h2a}
          <br />
          <span className="font-normal text-xs md:text-sm lg:text-xl">
            {contHero.h2b}
          </span>
        </h2>
        <div className="flex my-8 flex-row space-x-4 justify-center">
          <a
            href="https://wa.me/905443087402?text=bilgi"
            className="btn-hero bg-slate text-white"
          >
            {contHero.btn1}
            <IconComponent name="arrowright" size={18} color="white" />
          </a>
          <a
            href={"/" + StaticPages[2].link}
            className="btn-hero border-0 text-white"
          >
            {/* className="pb-2 border-b-2 border-slate" */}
            <span>{contHero.btn2}</span>
          </a>
        </div>
      </div>
      <Hero rVideo={rcHero} />
      <InfoBar info={barInfo} />
      <WhatWeGain img={rVideo} gain={whatwegain} />
      {/* 
      <WhyWeNeed need={whyweneed} />
      <WeeklyMeetings title={meetingTitle} meetingList={meetingList} />

      <AttendenceContitions img={rVideo} con={conditions} />
      <Workshops />

      <SocialMedia /> */}
    </>
  );
}
