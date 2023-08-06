import React, { useState } from "react";

const AppForm = () => {
  const [form, setForm] = useState({ name: "", email: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    // preventDefault 하게 되면 화면이 리플레쉬가 된다. 원하지 않을때는 preventDefault하게  하면된다.
    console.log(form);
  };

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
