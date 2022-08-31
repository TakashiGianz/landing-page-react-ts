import styled from "styled-components";

export const MainStyle = styled.main`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  > div {
    width: 50%;
  }
`;

export const TextsDiv = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    color: #1e255e;
    font-weight: 700;
    font-size: 56px;
    line-height: 84px;
  }

  h6 {
    color: rgba(30, 37, 94, 0.7);
    font-size: 16px;
    line-height: 24px;
    padding-top: 20px;
    padding-right: 150px;
    font-weight: normal;
  }
`


export const ImagesDiv = styled.div`
  img{
    margin-left: 108px;
    padding-top: 70px;
    display: block;
  }
`

