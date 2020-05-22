import styled from "styled-components";

export const UserInfoBlock = styled.div`
  width: 100%;
  height: auto;
  position: relative;

  .image-block {
    width: 100%;
    margin: 0 0 10px 0;
    height: 300px;
    border: 2px solid #3355ff;
    border-radius: 30px;
    overflow: hidden;
    position: relative;

    img {
      width: 100%;
      display: block;
      height: auto;
      margin-top: -100%;
      transform: translateY(50%);
    }
  }

  .title {
    margin: auto;
    text-align: center;
  }

  .email {
    display: block;
    text-align: center;
  }
`;
