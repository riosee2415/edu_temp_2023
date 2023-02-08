import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";
import useWidth from "../../hooks/useWidth";
import { MenuOutlined } from "@ant-design/icons";
import { Drawer } from "antd";

const menuStructure = [
  {
    name: "About",
    subMenus: [
      {
        name: "company",
        targetLink: "/about/company",
      },
      {
        name: "road",
        targetLink: "/about/road",
      },
    ],
  },
  {
    name: "Support",
    subMenus: [
      {
        name: "notice",
        targetLink: "/support/notice",
      },
      {
        name: "faq",
        targetLink: "/support/faq",
      },
      {
        name: "docs",
        targetLink: "/support/docs",
      },
    ],
  },
  {
    name: "Help",
    subMenus: [
      {
        name: "contact",
        targetLink: "/help/contact",
      },
      {
        name: "guide",
        targetLink: "/help/guide",
      },
    ],
  },
];

const MenuLv1Space = styled.ul`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

const Lv2Box = styled.ul`
  width: 180px;
  padding: 15px 10px;
  background-color: #fff;
  border-radius: 5px;

  position: absolute;
  top: 65px;
  left: -60px;

  box-shadow: 2px 2px 7px #d7d7d7;

  display: none;
  z-index: 999;
`;

const Lv2Item = styled.li`
  width: 100%;
  margin-bottom: 10px;
  color: #999;

  cursor: pointer;
  transition: 0.5s;

  &:hover {
    color: #fbc531;
  }
`;

const MenuLv1 = styled.li`
  position: relative;
  height: 100%;
  font-size: 18px;
  font-weight: 700;

  transition: 0.5s;
  cursor: pointer;

  &:hover {
    & > ${Lv2Box} {
      display: flex;

      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
    }
  }
`;

const MenuText = styled.p`
  height: 100%;
  padding: 5px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  transition: 0.5s;

  color: ${(props) => (props.active ? "#fbc531" : "")};

  &:hover {
    color: #fbc531;
  }
`;

const MobileMenuSection = styled.section`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

const MyMenuOutlined = styled(MenuOutlined)`
  color: #fff;
  font-size: 22px;

  transition: 0.5s;
  cursor: pointer;

  &:hover {
    color: #fbc531;
  }
`;

/////////////////////////////////////////////////////////////////
/////////////////////////MOBILE MENU/////////////////////////////
/////////////////////////////////////////////////////////////////

const MobileWrapper = styled.section`
  width: 100%;
  padding: 15px;
`;

const MobileLv1 = styled.ul``;

const MobileL1Item = styled.li`
  margin-top: 20px;
`;

const MobileLv1ItemText = styled.div`
  margin-bottom: 10px;
  border-bottom: 1px solid #f1f1f1;
  font-weight: 700;
  font-size: 17px;
`;

const MobileLv2Item = styled.li`
  margin-bottom: 5px;
  font-size: 15px;
  padding: 5px;
`;

const Menus = () => {
  const [currentActive, setCurrentActive] = useState("");
  const [mobileMenuFlag, setMobileMenuFlag] = useState(false);

  const router = useRouter();
  const resWidth = useWidth();

  useEffect(() => {
    const currentPathname = router.pathname;
    const beforeNeedValue = currentPathname.split("/");
    const needValue = beforeNeedValue[1];

    setCurrentActive(needValue);
  }, [router.pathname]);

  const mobileMenuToggleHandler = () => {
    setMobileMenuFlag((prevValue) => {
      return !prevValue;
    });
  };

  const mobileMovePageHandler = (target) => {
    router.push(target);
    mobileMenuToggleHandler();
  };

  return (
    <MenuLv1Space>
      {resWidth > 700 ? (
        menuStructure.map((outerItem) => {
          return (
            <MenuLv1 key={outerItem.name}>
              <MenuText
                active={
                  String(outerItem.name).toLowerCase() ===
                  String(currentActive).toLowerCase()
                }
              >
                {outerItem.name}
              </MenuText>
              <Lv2Box>
                {outerItem.subMenus.map((innerItem) => {
                  return (
                    <Lv2Item key={innerItem.name}>
                      <Link href={innerItem.targetLink}>{innerItem.name}</Link>
                    </Lv2Item>
                  );
                })}
              </Lv2Box>
            </MenuLv1>
          );
        })
      ) : (
        <MobileMenuSection>
          <MyMenuOutlined onClick={() => mobileMenuToggleHandler()} />

          <Drawer
            width="100%"
            open={mobileMenuFlag}
            onClose={() => mobileMenuToggleHandler()}
            title="MENU"
          >
            <MobileWrapper>
              <MobileLv1>
                {menuStructure.map((outerItem) => {
                  return (
                    <MobileL1Item key={outerItem.name}>
                      <MobileLv1ItemText>{outerItem.name}</MobileLv1ItemText>

                      <MobileLv1>
                        {outerItem.subMenus.map((innerItem) => {
                          return (
                            <MobileLv2Item
                              key={innerItem.name}
                              onClick={() =>
                                mobileMovePageHandler(innerItem.targetLink)
                              }
                            >
                              {innerItem.name}
                            </MobileLv2Item>
                          );
                        })}
                      </MobileLv1>
                    </MobileL1Item>
                  );
                })}
              </MobileLv1>
            </MobileWrapper>
          </Drawer>
        </MobileMenuSection>
      )}
    </MenuLv1Space>
  );
};

export default Menus;
