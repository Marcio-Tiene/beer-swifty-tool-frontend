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
          padding: '0',
          display: 'flex',

          alignItems: 'flex-end',
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
          alignItems: 'center',
          padding: '0',
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
