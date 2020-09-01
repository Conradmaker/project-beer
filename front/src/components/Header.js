import React from "react";
import styled from "styled-components";

export const Inner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const NavBar = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 20;
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  span {
    font-size: 40px;
    font-family: "Noto Serif SC", "Nanum Myeongjo", serif;
  }
  ul {
    height: 100%;
    display: flex;
    align-items: center;
    li {
      font-size: 22px;
      padding: 10px 20px;
    }
  }
`;
export default function Header() {
  return (
    <NavBar>
      <Inner>
        <span>맥心</span>
        <ul>
          <li>About</li>
          <li>Login</li>
          <li></li>
        </ul>
      </Inner>
    </NavBar>
  );
}
