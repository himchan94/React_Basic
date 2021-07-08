import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

const BucketList = (props) => {
  const bucket_list = useSelector((state) => state.bucket.list);

  return (
    <Container>
      {bucket_list.map((buck, index) => {
        return (
          <BucketBox
            key={index}
            onClick={() => {
              props.history.push("/detail" + index);
            }}
            is_true={buck.completed ? "yellow" : "grey"}
          >
            {buck.text}
          </BucketBox>
        );
      })}
    </Container>
  );
};

export default BucketList;

const BucketBox = styled.div`
  width: 80%;
  height: 50px;
  border: solid 2px blue;
  margin: auto;
  margin-top: 30px;
  padding-top: 10px;
  text-align: center;
  font-size: 30px;
  background-color: ${(props) => props.is_true};
`;

const Container = styled.div`
  width: 80%;
  height: 500px;
  overflow-y: auto;
  margin: auto;
`;
