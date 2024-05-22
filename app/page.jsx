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
import SubHero from "@/components/sections/home/1b-sub-hero";
import InfoBar from "@/components/sections/home/2-info-bar";

import WhyWeNeed from "@/components/sections/home/b-1-why-we-need";
import WhatWeGain from "@/components/sections/home/b-1-what-we-gain";

import WeeklyMeetings from "@/components/sections/home/c-1-weekly-meetings";
import AttendenceContitions from "@/components/sections/home/c-2-att-conditions";
import Workshops from "@/components/sections/home/c-3-workshops";

import Support from "@/components/sections/home/x6-support";

import HomeServices from "@/components/sections/home/c-services";
import BlogBar from "@/components/sections/home/c-blog-bar";
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
      <Hero />
      <SubHero rVideo={rcHero} />
      <InfoBar info={barInfo} />
      <WhatWeGain img={rVideo} gain={whatwegain} />
      {/* 
      <WhyWeNeed need={whyweneed} />
      <WeeklyMeetings title={meetingTitle} meetingList={meetingList} />

      <AttendenceContitions img={rVideo} con={conditions} />
*/}
      <Workshops />
      <HomeServices />
      <BlogBar />
      <SocialMedia />
    </>
  );
}
