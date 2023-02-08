import React from "react";
import styled from "styled-components";

const CompanyWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 65px);

  display: flex;
  flex-direction: column;
`;

const Box1 = styled.div`
  width: 100%;
  height: 25vh;
  background-color: #999;

  display: flex;
  flex-direction: column;
`;
const Box2 = styled.div`
  width: 100%;
  height: 75vh;

  display: flex;
  flex-direction: row;
`;

const Box2__1 = styled.div`
  width: 20%;
  height: 100%;
  background-color: green;

  display: flex;
  flex-direction: column;
`;
const Box2__2 = styled.div`
  width: 80%;
  height: 100%;

  display: flex;
  flex-direction: column;
`;

const Box2__2__1 = styled.div`
  width: 100%;
  height: 50%;
  background-color: yellow;

  display: flex;
  flex-direction: column;
`;
const Box2__2__2 = styled.div`
  width: 100%;
  height: 50%;

  display: flex;
  flex-direction: row;
`;

const Box2__2__2__1 = styled.div`
  width: 50%;
  height: 100%;
  background-color: skyblue;

  display: flex;
  flex-direction: column;
`;
const Box2__2__2__2 = styled.div`
  width: 50%;
  height: 100%;

  display: flex;
  flex-direction: column;
`;

const Box2__2__2__2__1 = styled.div`
  width: 100%;
  height: 50%;
  background-color: darkgray;

  display: flex;
  flex-direction: column;
`;
const Box2__2__2__2__2 = styled.div`
  width: 100%;
  height: 50%;
  background-color: orange;

  display: flex;
  flex-direction: column;
`;

const Company = () => {
  return (
    <CompanyWrapper>
      <Box1></Box1>
      <Box2>
        <Box2__1></Box2__1>
        <Box2__2>
          <Box2__2__1></Box2__2__1>
          <Box2__2__2>
            <Box2__2__2__1></Box2__2__2__1>
            <Box2__2__2__2>
              <Box2__2__2__2__1></Box2__2__2__2__1>
              <Box2__2__2__2__2></Box2__2__2__2__2>
            </Box2__2__2__2>
          </Box2__2__2>
        </Box2__2>
      </Box2>
    </CompanyWrapper>
  );
};

export default Company;
