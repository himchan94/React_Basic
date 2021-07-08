import React from "react";

import styled from "styled-components";

const Unfound = (props) => {
  return (
    <Container>
      <h1>없는 페이지입니다.</h1>
      <Button
        onClick={() => {
          props.history.goBack();
        }}
      >
        뒤로가기
      </Button>
    </Container>
  );
};

export default Unfound;

const Container = styled.div`
  width: 100%;
  text-align: center;
  color: red;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  width: 20%;
  font-size: 20px;
`;
