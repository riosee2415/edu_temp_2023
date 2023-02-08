import React from "react";
import styled from "styled-components";
import Menus from "./Menus";
import { useRouter } from "next/router";

const HeaderWrapper = styled.header`
  width: 100%;
  height: 65px;
  box-shadow: 2px 2px 7px #d7d7d7;
  padding: 0px 15px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  background-color: #353b48;
  color: #fff;
`;

const LogoImage = styled.img`
  width: 160px;
  height: auto;

  cursor: pointer;
`;

const MenuWrapper = styled.section`
  width: 700px;
  height: 100%;
`;

const Header = () => {
  const router = useRouter();

  return (
    <HeaderWrapper>
      <LogoImage
        onClick={() => router.push("/")}
        src="https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/4LEAFSOFTWARE/assets/images/LOGO/logo2.png"
      />
      <MenuWrapper>
        <Menus />
      </MenuWrapper>
    </HeaderWrapper>
  );
};

export default Header;
