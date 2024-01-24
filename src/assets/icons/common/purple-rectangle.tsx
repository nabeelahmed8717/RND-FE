import React from "react";

const PurpleRectangle = () => {
  return (
    <svg
      width="24"
      height="26"
      viewBox="0 0 24 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_dd_2237_193450)">
        <rect x="2" width="20" height="20" rx="3" fill="#6A346C" />
      </g>
      <defs>
        <filter
          id="filter0_dd_2237_193450"
          x="0"
          y="0"
          width="24"
          height="26"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="2"
            operator="erode"
            in="SourceAlpha"
            result="effect1_dropShadow_2237_193450"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0941176 0 0 0 0 0.152941 0 0 0 0 0.294118 0 0 0 0.08 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_2237_193450"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="2"
            operator="erode"
            in="SourceAlpha"
            result="effect2_dropShadow_2237_193450"
          />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="2" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0941176 0 0 0 0 0.152941 0 0 0 0 0.294118 0 0 0 0.12 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow_2237_193450"
            result="effect2_dropShadow_2237_193450"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow_2237_193450"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default PurpleRectangle;
