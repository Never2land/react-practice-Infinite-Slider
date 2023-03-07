import React from 'react';

const Card = ({ card }) => {
  const rotateValues = ['2deg', '-2deg', '0deg', '3deg', '-3deg'];
  const getRotateValues = () => {
    const val = rotateValues[Math.floor(Math.random() * rotateValues.length)];
    return `rotate(${val})`;
  };
  return (
    <a href={card?.href} target="__blank">
      <div className="card" style={{ transform: getRotateValues() }}>
        <svg
          fill="currentColor"
          width="45"
          height="36"
          style={{ color: '#cbd5e1' }}
        >
          <path d="M13.415.001C6.07 5.185.887 13.681.887 23.041c0 7.632 4.608 12.096 9.936 12.096 5.04 0 8.784-4.032 8.784-8.784 0-4.752-3.312-8.208-7.632-8.208-.864 0-2.016.144-2.304.288.72-4.896 5.328-10.656 9.936-13.536L13.415.001zm24.768 0c-7.2 5.184-12.384 13.68-12.384 23.04 0 7.632 4.608 12.096 9.936 12.096 4.896 0 8.784-4.032 8.784-8.784 0-4.752-3.456-8.208-7.776-8.208-.864 0-1.872.144-2.16.288.72-4.896 5.184-10.656 9.792-13.536L38.183.001z"></path>
        </svg>
        <h1>{card?.content}</h1>
        <div className="card-bottom">
          <img src={card?.avatar} />
          <p>{card?.name}</p>
        </div>
      </div>
    </a>
  );
};

export default Card;
