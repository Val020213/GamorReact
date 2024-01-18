import React from "react";
import Clock from "./Clock.tsx";
export default function BannerHero(): JSX.Element {
  return (
    <div id='banner-hero' className='banner-hero relative-force'>
      <MiniHeroSection />
      <div className='banner-hero-title'>
        <h1>Fornite New Seasson</h1>
        <p>Join Live Stream</p>
      </div>
      <Clock />
    </div>
  );
}

function MiniHeroSection(): JSX.Element {
  return (
    <>
      <img
        id='0'
        src=''
        alt='profile hero'
        className='banner-hero-image-top'
        style={{ display: "none" }}
        onClick={() => {
          this.style.display = "none";
        }}
      />
      <img
        id='1'
        src=''
        alt='profile hero'
        className='banner-hero-image-middle'
        style={{ display: "none" }}
        onClick={() => {
          this.style.display = "none";
        }}
      />
      <img
        id='2'
        src=''
        alt='profile hero'
        className='banner-hero-image-bottom'
        style={{ display: "none" }}
        onClick={() => {
          this.style.display = "none";
        }}
      />
    </>
  );
}
