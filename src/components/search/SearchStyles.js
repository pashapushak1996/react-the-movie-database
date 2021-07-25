import styled from "styled-components";

const MainSearchBlock = styled.section`
  padding: 80px 25px;
  background: url(${ ({bgImage}) => bgImage }) no-repeat center;
  background-size: cover;
  color: white;
`;

const SearchBlockTitle = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 35px;
  }
  
  div {
    margin-top: -10px;
    font-size: 30px;
  }
`;

const SearchBlockForm = styled.form`

  width: 100%;
  margin: 30px auto;
  display: flex;

  input, button {
    border: none;
    outline: none;
    border-radius: 20px;
  }

  input {
    width: 100%;
    height: 42px;
    background: #F9F0DA;
    padding: 0 15px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  
  button {
    height: 42px;
    cursor: pointer;
    padding: 0px 10px;
    font-size: 20px;
    font-weight: bold;
    color: #f3f1f1;
    background-color: #204b16;
    background-image: linear-gradient(to right, #4fc0ff, #c71aca);
    box-shadow: 0px 0px 10px 2px rgba(230, 130, 194, 0.85);
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
`;

export {
    MainSearchBlock,
    SearchBlockTitle,
    SearchBlockForm
}
