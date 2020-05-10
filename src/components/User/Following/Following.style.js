import styled from "styled-components";

export const UsersBlock = styled.div`
  margin-top: 20px;

  .title {
    color: #3355ff;
    margin: 0 20px 20px;
  }

  .users-slider {
    display: flex;
    align-items: center;

    .slider-item {
      img {
        border-radius: 50%;
        width: 100%;
      }
    }
  }

  .slider {
    width: calc(100% - 80px);
    overflow: hidden;
  }

  .carousel__back-button,
  .carousel__next-button {
    width: 30px;
    height: 30px;
    margin: 5px;
    border: 1px solid #3355ff;
    border-radius: 50%;
    outline: none;
    background: #fff;

    svg {
      path {
        fill: #3355ff;
      }
    }
  }
`;
