import React from "react";

import SignalCellularAltIcon from "@material-ui/icons/SignalCellularAlt";
import styled from "styled-components";

const Spinner = () => {
  return (
    <Outter>
      <SignalCellularAltIcon style={{ color: "#673ab7", fontSize: "150px" }} />
    </Outter>
  );
};

export default Spinner;

const Outter = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ede2ff;
`;
