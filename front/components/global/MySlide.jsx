import React, { useState } from "react";
import styled from "styled-components";
import useWidth from "../../hooks/useWidth";

const SlideSection = styled.div`
  width: 100%;
  height: ${(props) => props.height || "300px"};

  position: relative;
`;

const PrevBtn = styled.button`
  width: 20px;
  height: 50px;
  position: absolute;
  left: 10px;
  top: ${(props) => props.top || "0px"};
`;

const NextBtn = styled.button`
  width: 20px;
  height: 50px;
  position: absolute;
  right: 10px;
  top: ${(props) => props.top || "0px"};
`;

const MyImg = styled.img`
  position: absolute;
  left: 0;
  top: 0;

  width: 100%;
  height: 100%;

  object-fit: cover;
`;

const MySlide = ({ imgArr = [] }) => {
  const rsWidth = useWidth();
  const [imgIndex, setImgIndex] = useState(0);

  const nextHandler = () => {
    setImgIndex((prevState) => {
      if (prevState === imgArr.length - 1) {
        return 0;
      } else {
        return prevState + 1;
      }
    });
  };

  const prevHandler = () => {
    setImgIndex((prevState) => {
      if (prevState === 0) {
        return imgArr.length - 1;
      } else {
        return prevState - 1;
      }
    });
  };

  return (
    <SlideSection height={rsWidth > 700 ? "650px" : "300px"}>
      {imgArr.length === 0 ? (
        "이미지 슬라이드 준비 중 입니다."
      ) : (
        <>
          {/* IMAGE */}
          <MyImg src={imgArr[imgIndex]} />

          {/* Prev Btn */}
          <PrevBtn
            onClick={() => prevHandler()}
            top={rsWidth > 700 ? "300px" : "125px"}
          >{`<`}</PrevBtn>

          {/* Next Btn */}
          <NextBtn
            onClick={() => nextHandler()}
            top={rsWidth > 700 ? "300px" : "125px"}
          >{`>`}</NextBtn>
        </>
      )}
    </SlideSection>
  );
};

export default MySlide;
