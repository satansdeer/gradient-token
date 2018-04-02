import React from "react";
import PropTypes from "prop-types";

const IMAGE_SIZE = 100;

const TokenImage = ({ outer, inner, size }) => {
  const gradId = `${outer}${inner}`.replace(/#/g, "");
  const imageSize = size || IMAGE_SIZE;
  return (
    <svg
      width={imageSize}
      height={imageSize}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id={gradId}>
          <stop offset="0%" stopColor={outer} />
          <stop offset="100%" stopColor={inner} />
        </radialGradient>
      </defs>
      <circle
        cx={imageSize / 2}
        cy={imageSize / 2}
        r={imageSize / 2 - 4}
        fill={`url(#${gradId})`}
        stroke="#fff"
        strokeWidth="2"
      />
    </svg>
  );
};

TokenImage.propTypes = {
  outer: PropTypes.string.isRequired,
  inner: PropTypes.string.isRequired,
  size: PropTypes.number
};

export default TokenImage;
