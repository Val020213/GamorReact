import React from "react";
import Login from "../NavBar/Login.tsx";
import Register from "../NavBar/Register.tsx";
import Line from "../IconsSvg/Line.tsx";

export default function PromotionInfo(): JSX.Element {
  return (
    <div className='promotion-info-container'>
      <div className='promotion-info'>
        <div className='promotion-info-title' style={{ position: "relative" }}>
          <div className='up_text'>
            start
            <br />
            <span className='highlight'>streaming</span>
            <br />
            games
            <br />
            differently
          </div>
          <div className='promotion-info-ellipse-top ellipse-img'></div>
          <div className='promotion-info-ellipse-middle ellipse-img'></div>
          <div className='promotion-info-ellipse-button ellipse-img'></div>
        </div>
        <div className='promotion-info-description'>
          <p className='relative-force'>
            gamor has now stream party platform{" "}
            <span className='line'>
              <Line />
            </span>
          </p>
        </div>
        <div className='promotion-info-footer'>
          <Register className='promotion-register-button' />
          <Login />
        </div>
      </div>
    </div>
  );
}
