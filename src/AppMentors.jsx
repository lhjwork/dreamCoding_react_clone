import React, { useState } from 'react';

export default function AppMentors() {
  // react에서 만들어진 state는 불변성을 유지해줘야 한다.
  // 변경하고자 한다면 새로운 값 새로운 객체를 만들어 줘야 한다.
  // 이를 이해하고자 한다면 객체의 가변성 및 불변성을 이해해야 한다. 
  // 객체를 만들면 객체마다 고유한 reference 값이 만들어진다.
  // 그래서 참조(reference) 값이 동일한 상태에서 아무리 변경해 봤자 객체는 변경 되지 않는다.
  const [person, setPerson] = useState(initialPerson);
  const handleUpdate = () => {
    const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
    const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);
    setPerson(person =>({...person, mentors:person.mentors.map((mentor)=>{
      if(mentor.name === prev){
        return {...mentor, name:current};
      }else{
        return mentor;
      }
    })}));
  }

  const handleAdd = () =>{
    const name = prompt(`추가하고 싶은 멘토의 이름은 무엇인가요?`);
    const title = prompt(`멘토의 title은 어떻게 되나요?`);

    // // 뒤에다가 추가하고 싶을 때
    // setPerson(person => ({
    //   ...person, mentors: [...person.mentors, {name, title}]
    // }))

    // 앞에다가 추가하고 싶을 때
      setPerson(person => ({
        // 객체의 위치만 변경하면 된다.
      ...person, mentors: [ {name, title}, ...person.mentors]
    }))
 
  }
  const handleDelete = () =>{
    const name = prompt(`누구를 삭제하고 싶은가요?`);
    setPerson(person => ({
      ...person,
      mentors:person.mentors.filter((m)=>m.name !== name),
    }))
 
  }


  return (
    <div>
      <h1>
        {person.name}는 {person.title}
      </h1>
      <p>{person.name}의 멘토는:</p>
      <ul>
        {person.mentors.map((mentor, index) => (
          <li key={index}>
            {mentor.name} ({mentor.title})
          </li>
        ))}
      </ul>
      <button
        onClick={handleUpdate }>
        멘토의 이름을 바꾸기
      </button>

      <button onClick={handleAdd}>
        멘토 추가하기
      </button>


      <button onClick={handleDelete}>
        멘토 삭제하기
      </button>
    </div>
  );
}


const initialPerson = {
  name: '엘리',
  title: '개발자',
  mentors: [
    {
      name: '밥',
      title: '시니어개발자',
    },
    {
      name: '제임스',
      title: '시니어개발자',
    },
  ],
}