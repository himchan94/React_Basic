import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
const Header = () => {
  const bucket_list = useSelector((state) => state.bucket.list);

  let count = 0;

  let goal_per = bucket_list.map((l, idx) => {
    if (l.completed) {
      count++;
    }
  });
  return (
    <React.Fragment>
      <Head>버킷리스트</Head>
      <ProgressBG>
        <Progress width={(count / bucket_list.length) * 100 + "%"}></Progress>
        <Circle />
      </ProgressBG>
      <UnderLine />
    </React.Fragment>
  );
};

export default Header;

const Head = styled.div`
  width: 80%;
  text-align: center;
  font-size: 36px;
  color: skyblue;
  margin: auto;
  margin-top: 10px;
`;

const UnderLine = styled.div`
  width: 80%;
  margin: auto;
  margin-top: 20px;
  border-top: dotted 1px skyblue;
`;

const ProgressBG = styled.div`
  width: 80%;
  height: 40px;
  background-color: lightgrey;
  margin: auto;
  margin-top: 10px;
  display: flex;
  align-items: center;
  border-radius: 20px;
`;

const Progress = styled.div`
  width: ${(props) => props.width};
  height: 40px;
  background-color: yellow;
  border-radius: 20px;
  transition: 2s;
`;

const Circle = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: green;
  margin-left: -20px;
`;
