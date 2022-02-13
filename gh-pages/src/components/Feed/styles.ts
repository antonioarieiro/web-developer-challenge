import styled from 'styled-components';

export const FeedContainer = styled.div`
  background: #2b2b2b;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 30px;
  > p {
    width: 30px;
    height: 17px;
    font-family: Roboto;
    font-size: 24px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;

    text-align: left;
    color: #7a7a7a;
  }
`;

export const FeedBox = styled.div`
  max-width: 600px;
  flex-wrap: wrap;
  display: flex;
  flex-direction: row;
  justify-content: flex-center;
  margin: 40px 425px 56px;
  padding: 24px;
  border-radius: 3px;
  border: solid 1px #3b3b3b;
  background: #313131;
  overflow: hidden;
  text-overflow: ellipsis;
  img {
    width: 100px;
    height: 100px;
    margin: 24px 32px 16px 0;
    object-fit: contain;
    border-radius: 36px;
  }
  button {
    width: 25px;
    height: 25px;
    background: black;
    > img {
      width: 20px;
      margin: auto;
      height: 20px;
    }
  }
  h4 {
    width: 348px;
    height: 80px;
    margin: 24px 12px 24px 32px;
    font-family: Roboto;
    font-size: 20px;
    text-align: right;
    color: white;
  }
  p {
    margin-top: 15px;
    font-size: 20px;
    color: white;
  }
`;
