import React, { Children } from "react";

const AppWrap = () => {
  return (
    <div>
      <Navbar>
        <Avatar
          image="https://picsum.photos/id/237/200/300"
          name="Bob"
          size={200}
        />
      </Navbar>
    </div>
  );
};

export default AppWrap;

function Navbar({ children }) {
  return <header style={{ backgroundColor: "yellow" }}>{children}</header>;
}

function Avatar({ image, name, size }) {
  return (
    <div>
      <img
        src={image}
        alt={`${image}`}
        width={size}
        height={size}
        style={{ borderRadius: "50%" }}
      />
    </div>
  );
}
