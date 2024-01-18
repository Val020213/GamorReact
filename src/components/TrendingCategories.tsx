import React from "react";
import RightArrowIcon from "./IconsSvg/RightArrow.tsx";

export default function TrendingCategories() {
  return (
    <div className='trending-categories'>
      <h1>Trending Categories</h1>
      <div className='trending-categories-container'>
        {categories.map((category, index) => {
          return (
            <Category key={index} id={index + 1} name={category} href='' />
          );
        })}
      </div>
    </div>
  );
}

const categories: string[] = [
  "Action Games",
  "Sport Games",
  "Adventure Games",
  "Arcade Games",
  "Fantasy Games",
  "Strategy Games",
  "Shooter Games",
  "All Categories",
];

type categoryProps = {
  id: number;
  name: string;
  href: string;
};

function Category({ id, name, href }: categoryProps) {
  return (
    <div className='category'>
      <span className='category-id'>/{id}</span>
      {name}
      <RightArrowIcon />
    </div>
  );
}
