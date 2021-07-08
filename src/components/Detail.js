import React from "react";

import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import { deleteBucketFB, updateBucketFB } from "../redux/modules/bucket";

const Detail = (props) => {
  const dispatch = useDispatch();
  const bucket_list = useSelector((state) => state.bucket.list);
  const bucket_index = parseInt(props.match.params.index);

  return (
    <Container>
      <h1>
        {bucket_list[bucket_index] ? bucket_list[bucket_index].text : null}
      </h1>
      <button
        onClick={() => {
          dispatch(deleteBucketFB(bucket_index));
          props.history.goBack();
        }}
      >
        삭제하기
      </button>
      <button
        onClick={() => {
          dispatch(updateBucketFB(bucket_index));
          props.history.goBack();
        }}
      >
        완료하기
      </button>
    </Container>
  );
};

export default Detail;

const Container = styled.div`
  background-color: blue;
  text-align: center;
  color: yellow;
  width: 80%;
  margin: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
