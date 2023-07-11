import React, { useState } from 'react';
import './AppXY.css';

export default function AppXY() {
  // const [x,setX] = useState(0);
  // const [y,setY] = useState(0);
  // 서로 밀접한 연관성을 가진 데이터라면 이렇게 객체로 다루는 것이 효율 적임
  const [position, setPostion] = useState({x:0, y:500 , z:0});


  return (
    <div className='container' onPointerMove={(e)=>{

        // setX(e.clientX);
        // setY(e.clientY);

        // setPostion({x:e.clientX, y:e.clientY})

        // 만약 수평으로만 이동이 가능하다면
        // prev.y 이전 상태값만 가져 오도록 함
        // setPostion(prev => ({x:e.clientX, y:prev.y}));

        // 객체의 변수가 여러개일때 
        // 스프레드 연산자를 사용해서 변화시키고 싶은 것만 하는 것도 가능
        setPostion(prev => ({...prev, x:e.clientX,}));

    }}>
      {/* <div className='pointer' style={{transform:`translate(${x}px, ${y}px)`}}/> */}
      <div className='pointer' style={{transform:`translate(${position.x}px, ${position.y}px)`}}/>
    </div>
  );
}
