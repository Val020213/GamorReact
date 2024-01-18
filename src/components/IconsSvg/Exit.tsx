import React from "react";

export default function ExitIcon(): JSX.Element {
  return (
    <svg
      className='exit-icon'
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
    >
      <path
        d='M18 6L6 18M6 6L18 18'
        stroke='#2F2F2F'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}
