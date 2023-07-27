import React, { useState } from 'react';

const FlipCard = ({ frontContent, backContent }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`flip-card ${isFlipped ? 'flipped' : ''}  h-24   `} onMouseLeave={handleCardClick} onMouseEnter={handleCardClick}>
      <div className="flip-card-inner   ">
        <div className="flip-card-front rounded-xl text-center     ">
          <div className=' p-7 text-[#2980b9] text-xl'>{frontContent}</div>
        </div>
        <div className="flip-card-back text-xl border-blue-700 rounded-xl pl-7 pt-5">
          <div>{backContent}</div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;