import styled from "styled-components";

export const ChatListBase = styled.ul`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  padding: 10px;
`;

export const ChatMember = styled.li`
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  margin: 10px 0;
  border-radius: 30px;
  background: #fff;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  :hover {
    background: #efefef;

    h6 {
      color: #007bff;
    }
  }

  .image-block {
    width: 60px;
    overflow: hidden;
    border-radius: 50%;
    margin-right: 10px;
    position: relative;

    img {
      width: 100%;
      height: auto;
      display: block;
    }
  }

  h6,
  p {
    transition: all 0.2s ease-in-out;
    margin: 5px;
  }
`;
