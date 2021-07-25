import styled from "styled-components";

export const StyledMovieListCard = styled.div`
  border: 1px solid lightgrey;
  border-radius: 10px;
  -webkit-box-shadow: 3px 18px 18px -12px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 3px 18px 18px -12px rgba(34, 60, 80, 0.2);
  box-shadow: 3px 18px 18px -12px rgba(34, 60, 80, 0.2);

  .card_image {
    width: 100%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  .card_footer {
    padding: 10px 10px;
  }

  img {
    max-width: 100%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  h4 {
    font-size: 17px;
  }

  span {
    font-size: 16px;
    font-family: "Times New Roman", sans-serif;
    color: grey;
  }

`;