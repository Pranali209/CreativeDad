import React, { useState, useEffect } from 'react';

function FollowCusor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    useEffect(() => {
        const handleMouseMove = (event) => {
          setPosition({ x: event.clientX, y: event.clientY });
        };
    
        window.addEventListener('mousemove', handleMouseMove);
    
        return () => {
          window.removeEventListener('mousemove', handleMouseMove);
        };
      }, [])
  return (
    <div
    className="fixed w-3 h-3 bg-black rounded-full pointer-events-none  followCircle"
    style={{ top: position.y, left: position.x, transform: 'translate(-50%, -50%)' }}
  ></div>
  )
}

export default FollowCusor