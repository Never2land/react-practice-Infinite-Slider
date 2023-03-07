import React, { useState, useEffect, useRef } from 'react';
import { cardDetails } from '../cardDetails';
import Card from './Card';

const Row = () => {
  const scrollRef = React.useRef();
  const hoverRef = React.useRef();
  const clonedScrollerRef = React.useRef();
  const [playing, setPlaying] = useState(true);
  const playingRef = useRef(playing);
  const speed = 60;

  React.useEffect(() => {
    playingRef.current = playing;
  }, [playing]);

  useEffect(() => {
    const pixelsPerFrame = speed / 60;
    let animating = true;
    let scrollerXPos = 0;
    let clonedScrollerXPos = 0;
    function animate() {
      if (playingRef.current) {
        scrollerXPos -= pixelsPerFrame;
        clonedScrollerXPos -= pixelsPerFrame;

        if (hoverRef.current) {
          scrollerXPos -= pixelsPerFrame / 10;
          clonedScrollerXPos -= pixelsPerFrame / 10;
        } else {
          scrollerXPos -= pixelsPerFrame;
          clonedScrollerXPos -= pixelsPerFrame;
        }

        if (scrollerXPos <= -scrollRef?.current.offsetWidth) {
          scrollerXPos = scrollRef?.current.offsetWidth;
        }

        if (clonedScrollerXPos <= -clonedScrollerRef.current.offsetWidth * 2) {
          clonedScrollerXPos = 0;
        }

        scrollRef.current.style.transform = `translateX(${scrollerXPos}px)`;
        clonedScrollerRef.current.style.transform = `translateX(${clonedScrollerXPos}px)`;
      }

      if (animating) {
        window.requestAnimationFrame(animate);
      }
    }
    window.requestAnimationFrame(animate);
    return () => (animating = false);
  }, []);

  return (
    <div
      className="row"
      onMouseOver={() => (hoverRef.current = true)}
      onMouseOut={() => (hoverRef.current = false)}
    >
      <div ref={scrollRef}>
        {cardDetails.map((detai) => (
          <Card card={detai} />
        ))}
      </div>
      <div ref={clonedScrollerRef}>
        {cardDetails.map((detai) => (
          <Card card={detai} />
        ))}
      </div>
    </div>
  );
};

export default Row;
