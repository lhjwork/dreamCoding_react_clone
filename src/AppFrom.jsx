import React, { useState } from "react";

const AppForm = () => {
  const [form, setForm] = useState({ name: "", email: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    // preventDefault 하게 되면 화면이 리플레쉬가 된다. 원하지 않을때는 preventDefault하게  하면된다.
    console.log(form);
  };

//   form에 있는 input 데이터는 uncontrol compoent로써 react의 상태관리와 달리 바로 수정된 화면을 확인 가능하다.그래서 form을 사용
//  할때는 State에 의해서 value를 전달하고 onChane가 발생 할때 마다 state를 변경해주어야한다. 따로 관리해도 되지만 연관된 데이터라면 
//  객체로 관리하는 것을 추천한다.
  const handleChange = (e) => {
    const { name, value } = e.target;
    //[현재 전달 받는 key] : 값
    setForm({ ...form, [name]: value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">이름</label>
      <input
        type="text"
        id="name"
        name="name"
        value={form.name}
        onChange={handleChange}
      />
      <label htmlFor="email">이메일</label>
      <input
        type="email"
        id="email"
        name="email"
        value={form.email}
        onChange={handleChange}
      />
      <button>Submit</button>
    </form>
  );
};

export default AppForm;
