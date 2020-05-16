import styled from "styled-components";

export const CommentBar = styled.div`
  border-bottom: 1px solid #efefef;
  width: 100%;
  padding: 20px;

  .title {
    color: #4477ff;
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
      font-size: 14px;
      color: #9a9a9a;
    }
  }

  .comment {
    padding: 40px 0;
    border-bottom: 1px solid #efefef;
    border-top: 1px solid #efefef;
    margin-bottom: 20px;
  }
`;