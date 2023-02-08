import React from "react";
import styled from "styled-components";
import useWidth from "../../hooks/useWidth";

const MainViewBox = styled.div`
  width: 100%;
  padding: 20px 0px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const Box = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.width};
  min-width: ${(props) => props.width};

  background-color: blue;
  margin: 5px;
`;

const MainView1 = () => {
  const rsWidht = useWidth();

  return (
    <MainViewBox>
      <Box width={rsWidht > 700 ? "280px" : "330px"}>1</Box>
      <Box width={rsWidht > 700 ? "280px" : "330px"}>2</Box>
      <Box width={rsWidht > 700 ? "280px" : "330px"}>3</Box>
      <Box width={rsWidht > 700 ? "280px" : "330px"}>4</Box>
    </MainViewBox>
  );
};

export default MainView1;
