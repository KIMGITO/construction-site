import React from "react";

const LogoImage = ({ className = "", width = 300, height = 100 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 300 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* House Icon Section */}
      <g transform="translate(0, 0)">
        {/* Foundation */}
        <rect x="10" y="85" width="100" height="3" fill="#c9a959" />

        {/* Side Walls */}
        <rect x="15" y="55" width="3" height="30" fill="#c9a959" />
        <rect x="102" y="55" width="3" height="30" fill="#c9a959" />

        {/* Back Roof Slope */}
        <path
          d="M77 40 L95 15 L115 45"
          stroke="#c9a959"
          strokeWidth="4"
          fill="none"
        />

        {/* Front Gable */}
        <path
          d="M5 55 L45 15 L85 55"
          stroke="#c9a959"
          strokeWidth="5"
          fill="none"
        />

        {/* Chimney */}
        <rect x="22" y="18" width="6" height="16" fill="#c9a959" />

        {/* Arched Window */}
        <path
          d="M35 45 A10 10 0 0 1 55 45 L55 65 L35 65 Z"
          stroke="#c9a959"
          strokeWidth="2"
          fill="none"
        />
      </g>

      {/* Text Section */}
      <g transform="translate(125, 25)">
        {/* INTERLOCKING */}
        <text
          x="0"
          y="20"
          fontFamily="Playfair Display, Georgia, serif"
          fontSize="24"
          fontWeight="900"
          fill="#c9a959"
          letterSpacing="-0.5"
        >
          INTERLOCKING
        </text>

        {/* BLOCK BUILDERS */}
        <text
          x="0"
          y="48"
          fontFamily="Playfair Display, Georgia, serif"
          fontSize="16"
          fontWeight="700"
          fill="#94a3b8"
          letterSpacing="1"
        >
          BLOCK BUILDERS
        </text>
      </g>
      {/* Tagline */}
      <text
        x="0"
        y="80"
        fontFamily="Playfair Display, Georgia, serif"
        fontSize="10"
        fontStyle="italic"
        fill="#c9a959"
      >
        Building futures, One block at a time
      </text>
    </svg>
  );
};

export default LogoImage;