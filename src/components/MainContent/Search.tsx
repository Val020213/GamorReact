import React from "react";
import Platform from "./Platform.tsx";
import Ranking from "./Ranking.tsx";

export default function Search(): JSX.Element {
  return (
    <div className='search-section'>
      <div className='flex flex-col fullWidth-force'>
        <h1>
          <span className='search-section-number'>01.</span> Choose Platform
        </h1>
        <Platform />
      </div>
      <div className='flex flex-col fullWidth-force'>
        <h1>
          <span className='seacrh-section-number'>02.</span> Searching Game
        </h1>
        <Ranking />
      </div>
    </div>
  );
}
