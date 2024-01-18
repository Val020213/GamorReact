import React from "react";

export default function RightArrow(): JSX.Element {
  return (
    <svg className='right-arrow-icon'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='16'
        height='10'
        viewBox='0 0 16 10'
        fill='none'
      >
        <path
          d='M1 5H15M15 5L11 9M15 5L11 1'
          stroke='black'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </svg>
  );
}
