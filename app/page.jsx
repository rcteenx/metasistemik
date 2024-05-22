import smd from "@/content/data/siteMetaData";

import { barInfo, whatwegain } from "@/content/data";
import { rcHero, rVideo } from "@/public/assets/images";

import Hero from "@/components/sections/home/1-hero";
import SubHero from "@/components/sections/home/1b-sub-hero";
import InfoBar from "@/components/sections/home/3-info-bar";

import WhatWeGain from "@/components/sections/home/b-1-what-we-gain";

import Workshops from "@/components/sections/home/c-1-workshops";

import HomeServices from "@/components/sections/home/c-2-services";
import BlogBar from "@/components/sections/home/c-3-blog-bar";
import SocialMedia from "@/components/sections/common/z-social-media";

export async function generateMetadata() {
  return {
    title: smd.title + " - Metasistemik",
  };
}

export default function Home() {
  return (
    <>
      <Hero />
      <SubHero rVideo={rcHero} />
      <InfoBar info={barInfo} />
      <WhatWeGain img={rVideo} gain={whatwegain} />

      <Workshops />
      <HomeServices />
      <BlogBar />
      <SocialMedia />
    </>
  );
}
