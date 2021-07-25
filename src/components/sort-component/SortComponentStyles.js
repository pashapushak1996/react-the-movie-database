import styled from "styled-components";

const DropdownListTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  img {
    max-width: 100%;
    height: 20px;
  }`;
const DropdownButton = styled.div`
  width: 100%;
  border: 1px solid lightgrey;
  padding: 8px;
  border-radius: 10px;

  select {
    width: 100%;
    padding: 5px 0;
    background-color: lightgrey;
    font-size: 14px;
    font-family: Monospaced, sans-serif;
    border: none;
    border-radius: 5px;
    outline: none;
  }

  option {
    font-size: 14px;
    font-family: Monospaced, sans-serif;
  }

  .dropdown_items {
    border-top: 1px solid lightgrey;
    padding: 10px 0px;
    display: ${ ({hidden}) => hidden ? 'none' : 'block' };
  }
`;

export {
    DropdownListTitle,
    DropdownButton

}