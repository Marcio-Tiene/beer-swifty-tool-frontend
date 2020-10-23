import React from 'react';
import { FaStar, FaStarHalf } from 'react-icons/fa';

interface Rating {
  StarSize: number;
}

const Rating = ({ StarSize }: Rating) => {
  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          width: `${StarSize * 5}px`,
          height: `${StarSize * 1.2}px`,
        }}
      >
        <FaStar size={StarSize} color=' #FFD500' />
        <FaStar size={StarSize} color=' #FFD500' />
        <FaStar size={StarSize} color=' #FFD500' />
        <FaStar size={StarSize} color=' #FFD500' />
        <FaStarHalf size={StarSize} color=' #FFD500' />
      </div>
      <h1
        style={{
          fontSize: `${StarSize}px`,
          lineHeight: `${StarSize * 1.2}px`,
          color: ' #FFD500',
        }}
      >
        4,7
      </h1>
    </>
  );
};

export default Rating;
