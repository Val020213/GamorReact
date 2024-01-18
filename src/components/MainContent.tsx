import React from "react";

import PromotionInfo from "./MainContent/PromotionInfo.tsx";
import BannerHero from "./MainContent/BannerHero.tsx";
import Search from "./MainContent/Search.tsx";

export default function MainContent(): JSX.Element {
  return (
    <div className='main-content-container'>
      <PromotionInfo />
      <BannerHero />
      <Search />
    </div>
  );
}
