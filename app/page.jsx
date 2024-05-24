import smd from "@/content/data/siteMetaData";

import {
  barInfo,
  whatwegain,
  whatwegain2,
  schoolTitle,
  schoolList,
} from "@/content/data";
import {
  rcHero,
  kocluky1,
  kocluky2,
  metasistemikNedir,
} from "@/public/assets/images";

import Hero from "@/components/sections/home/1-hero";
import SubHero from "@/components/sections/home/1b-sub-hero";
import InfoBar from "@/components/sections/home/3-info-bar";

import WhatWeGain from "@/components/sections/home/b-1-what-we-gain";
import Schools from "@/components/sections/home/b-2-schools";

import Schools2 from "@/components/sections/home/b-2a-schools";

import Workshops from "@/components/sections/home/c-1-workshops";

import HomeServices from "@/components/sections/home/c-2-services";
import BlogBar from "@/components/sections/home/c-3-blog-bar";
import SocialMedia from "@/components/sections/common/z-contact";

export async function generateMetadata() {
  return {
    title: smd.title + " - Metasistemik",
  };
}

export default function Home() {
  return (
    <>
      <Hero />
      <SubHero img={metasistemikNedir} />
      <InfoBar info={barInfo} />

      <WhatWeGain
        img={kocluky1}
        img2={kocluky2}
        gain={whatwegain}
        gain2={whatwegain2}
      />

      <Schools2 />

      {/* <Schools title={schoolTitle} xlist={schoolList} /> */}

      <Workshops />
      <HomeServices />
      <BlogBar />
      <SocialMedia />
    </>
  );
}
