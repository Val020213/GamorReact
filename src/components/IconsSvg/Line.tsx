import React from "react";

export default function Line(): JSX.Element {
  return (
    <svg className="line"
      xmlns='http://www.w3.org/2000/svg'
      width='76'
      height='5'
      viewBox='0 0 76 5'
      fill='none'
    >
      <path
        d='M0 3.98442L18.2377 4L39.1198 1.26961C40.4904 1.09041 41.8765 1.0613 43.2534 1.18281L75 3.98442'
        stroke='var(--primary-color);'
        strokeMiterlimit='1.41421'
      />
    </svg>
  );
}
