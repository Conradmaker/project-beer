import React from "react";
import styled from "styled-components";
import IMG from "../img/banner.jpg";

const Visual = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;
  box-sizing: border-box;
  background-image: url(${IMG});
  background-size: cover;
  background-position: bottom;
  background-repeat: no-repeat;
  background-color: #c67a00;
  display: flex;
  align-items: center;
  justify-content: center;
  h1 {
    font-size: 80px;
    margin-bottom: 400px;
    font-weight: bold;
    font-family: "Noto Serif SC", "Nanum Myeongjo", serif;
    small {
      font-size: 30px;
      margin-left: 20px;
    }
    span:nth-child(1) {
      padding-right: 50px;
    }
    span:nth-child(3) {
      display: block;
      margin-left: 50px;
    }
  }
  ul {
    width: 100%;
    display: flex;
    justify-content: center;
    position: absolute;
    bottom: 50px;

    li {
      display: flex;
      flex-direction: column;
      max-width: 280px;
      border-right: 1px solid black;
      padding: 0 20px;
      text-align: center;
      transition: all 0.2s;
      cursor: pointer;
      &:hover {
        text-shadow: 0 2px 5px #222;
        transform: translateY(-5px);
      }
      h3 {
        font-size: 24px;
        font-weight: bold;
      }
      p {
        font-size: 20px;
      }
    }
    li:last-child {
      border: none;
    }
  }
`;

export default function Banner() {
  return (
    <Visual>
      <h1>
        <span>
          맥<small>주에 대한</small>
        </span>
        <br />
        <span>
          心<small>오한 생각</small>
        </span>
      </h1>
      <ul>
        <li>
          <h3>먹어도 알고먹자!</h3>
          <p>맥주의 종류와 역사</p>
        </li>
        <li>
          <h3>새로운거 없나?</h3>
          <p>편의점에는 무슨 맥주가?</p>
        </li>
        <li>
          <h3>저 맥주 무슨맛일까?</h3>
          <p>회원간의 후기공유</p>
        </li>
        <li>
          <h3>무슨맥주 먹을까?</h3>
          <p>맥주추천알고리즘</p>
        </li>
      </ul>
    </Visual>
  );
}
