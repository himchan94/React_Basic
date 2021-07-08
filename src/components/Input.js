import React, { useEffect } from "react";
import styled from "styled-components";

import { useDispatch, useSelector } from "react-redux";
import { createBucketFB } from "../redux/modules/bucket";

const Input = () => {
  const dispatch = useDispatch();
  const text = React.createRef();

  return (
    <Container>
      <InputBox type="text" ref={text} />
      <Button
        onClick={() => {
          dispatch(createBucketFB(text.current.value));
          text.current.value = "";
        }}
      >
        일정등록
      </Button>
    </Container>
  );
};

export default Input;

const InputBox = styled.input`
  width: 80%;
  height: 20px;
  margin: auto;
  margin-top: 50px;
  position: relative;
`;

const Container = styled.div`
  display: flex;
  /* justify-content: space-between; */
`;

const Button = styled.button`
  position: absolute;
  right: 60px;
  width: 100px;
  height: auto/2;
  margin-top: 49.5px;
  padding: 3px;
  &:hover {
    background-color: yellow;
  }

  @media screen and (max-width: 500px) {
    position: relative;
  }
`;
