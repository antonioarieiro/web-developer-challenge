import styled from "styled-components";

export const ContentBox = styled.div`
  max-width: 1366pxpx;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #343434;
`;

export const PublicationBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 40px 425px 56px;
  padding: 24px;
  border-radius: 3px;
  border: solid 1px #3b3b3b;
  background-color: #313131;
  > img {
    width: 300px;
    height: 200px;
    margin: auto;
    object-fit: fill;
    border-radius: 36px;
    border: solid 1px #4b4b4b;
    background-color: rgba(75, 75, 75, 0);
  }
  > input {
    max-width: 468px;
    margin: auto;
    margin-top: 10px;
    display: flex;
    justify-content: center;
    padding: 12px 351px 11px 16px;
    border-radius: 8px;
    background-color: #494949;
  }
`;

export const FileImage = styled.input`
  color: transparent;
  width: 300px;
  height: 200px;
  margin: auto;
  object-fit: fill;
  border-radius: 36px;
  border: solid 4px white;
  background-color: rgba(75, 75, 75, 0);
  
`;

export const DescritionInput = styled.input`
  height: 88px;
  max-width: 468px;
  margin: auto;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  padding: 12px 351px 11px 16px;
  border-radius: 8px;
  background-color: #494949;
`;

export const GroupButton = styled.div`
  justify-content: center;
  display: flex;
  button {
    width: 98px;
    height: 41px;
    margin: 10px 10px;
    border-radius: 8px;
    background-color: green;
    text-align: center;
    p {
      width: auto;
      height: auto;
      font-family: Roboto;
      font-size: 20px;

      letter-spacing: normal;
      text-align: center;
      color: white;
    }
  }
`;
