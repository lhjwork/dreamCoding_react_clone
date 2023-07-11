import React, { useState } from 'react';
import './AppXY.css';

export default function AppXY() {
  // const [x,setX] = useState(0);
  // const [y,setY] = useState(0);
  // 서로 밀접한 연관성을 가진 데이터라면 이렇게 객체로 다루는 것이 효율 적임
  const [position, setPostion] = useState({x:0, y:0});


  return (
    <div className='container' onPointerMove={(e)=>{
      setPostion({x:e.clientX, y:e.clientY})
        // setX(e.clientX);
        // setY(e.clientY);
    }}>
      {/* <div className='pointer' style={{transform:`translate(${x}px, ${y}px)`}}/> */}
      <div className='pointer' style={{transform:`translate(${position.x}px, ${position.y}px)`}}/>
    </div>
  );
}
